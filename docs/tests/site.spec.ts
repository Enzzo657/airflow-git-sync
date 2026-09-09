import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const path = "/airflow-git-sync/";

test("prerendered content hydrates, translates and retains language", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error" || /hydration_/i.test(message.text()))
      errors.push(message.text());
  });
  await page.goto(path);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  const examples = await page.locator("pre code").allTextContents();
  expect(examples).toHaveLength(6);
  await page.locator('[data-lang="ru"]').click();
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await expect(page.locator("h1")).toContainText("Ваши DAG’и.");
  await expect(page).toHaveTitle(
    "Airflow Git Sync — Синхронизация DAG’ов с Git",
  );
  await expect(page.locator('meta[name="description"]')).toHaveCount(1);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Автоматическая/,
  );
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
    "content",
    "ru_RU",
  );
  expect(await page.locator("pre code").allTextContents()).toEqual(examples);
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await page.locator('[data-lang="en"]').click();
  await expect(page.locator("h1")).toContainText("Your DAGs.");
  expect(errors).toEqual([]);
});

test("copy preserves source and handles permission failure in the selected language", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto(path);
  const source = await page.locator("pre code").nth(2).textContent();
  await page.locator(".copy").nth(2).click();
  await expect(page.locator(".copy").nth(2)).toHaveText("Copied!");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    source,
  );
  await page.locator('[data-lang="ru"]').click();
  await expect(page.locator(".copy").nth(2)).toHaveText("Скопировано!");
  await page.evaluate(() => {
    navigator.clipboard.writeText = async () => {
      throw new Error("Denied");
    };
  });
  await page.locator(".copy").first().click();
  await expect(page.locator(".copy-status").first()).toBeVisible();
  await expect(page.locator(".copy-status").first()).toContainText(
    "Не удалось скопировать",
  );
});

test("mobile navigation, keyboard scrolling, and reduced motion", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(path);
  for (const id of [
    "overview",
    "how-it-works",
    "quick-start",
    "configuration",
  ]) {
    await page.locator(".menu-toggle").click();
    await expect(page.locator("#mobile-nav")).toBeVisible();
    await page.locator(`#mobile-nav a[href="#${id}"]`).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator("#mobile-nav")).toBeHidden();
  }
  await page.locator(".menu-toggle").click();
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-nav")).toBeHidden();
  await expect(page.locator(".menu-toggle")).toBeFocused();
  await page.locator(".menu-toggle").click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator("#mobile-nav")).toBeHidden();
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator("#mobile-nav")).toBeHidden();
  await page.locator("pre").nth(2).focus();
  await page.keyboard.press("ArrowRight");
  await expect
    .poll(() =>
      page
        .locator("pre")
        .nth(2)
        .evaluate((node) => node.scrollLeft),
    )
    .toBeGreaterThan(0);
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});

for (const language of ["en", "ru"]) {
  test(`responsive layout and accessibility: ${language}`, async ({
    page,
  }, testInfo) => {
    await page.goto(path);
    await page.locator(`[data-lang="${language}"]`).click();
    for (const width of [320, 375, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        `overflow at ${width}px`,
      ).toBe(false);
      if (width === 390 || width === 1440) {
        const audit = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        expect(audit.violations).toEqual([]);
        await page.screenshot({
          path: testInfo.outputPath(`${language}-${width}.png`),
          fullPage: true,
        });
      }
    }
  });
}

test("English documentation is readable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173" + path);
  await expect(page.locator("h1")).toContainText("Your DAGs.");
  await expect(page.locator("#configuration tbody tr")).toHaveCount(5);
  await expect(page.locator("pre code")).toHaveCount(6);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://Enzzo657.github.io/airflow-git-sync/",
  );
  await context.close();
});

test("language switch still works when browser storage is unavailable", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new Error("Storage denied");
      },
    });
  });
  await page.goto(path);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.locator('[data-lang="ru"]').click();
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
});
