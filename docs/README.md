# Documentation website

The landing page uses **Svelte 5**, **SvelteKit**, TypeScript, and the static adapter. SvelteKit prerenders the complete English page at build time, then hydrates language switching, navigation, and code examples in the browser. Deployment requires only static hosting.

## Development

Use Node.js 24 LTS. From the repository root:

```bash
npm ci --prefix docs
npm run dev --prefix docs
```

Open `http://127.0.0.1:5173/airflow-git-sync/`.

```bash
npm run check --prefix docs
npm run build --prefix docs
npm run preview --prefix docs
```

The build is written to `docs/build/`. The base path `/airflow-git-sync` is configured in `svelte.config.js`. Public project URLs live in `src/lib/site.ts`.

## Source structure

- `src/routes/`: static page, shared layout, and localized SEO metadata.
- `src/lib/components/`: page sections, header, logo, language switcher, and code blocks, with scoped styles.
- `src/lib/i18n.svelte.ts`: reactive language context, with English as the default and an optional browser preference.
- `src/lib/translations.ts`: complete English and Russian dictionaries.
- `src/lib/examples.ts`: copyable Docker and Compose examples.
- `src/lib/highlight.ts`: lightweight tokenization; Svelte renders escaped text.
- `src/app.css`: shared typography, colors, spacing, and accessibility styles.
- `static/`: public assets copied into the build.

## Browser checks

Build first, install the test browser once, then run the tests:

```bash
cd docs
npx playwright install chromium
npm test
```

Set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to use an existing Chromium browser. Tests cover hydration, EN/RU, persistence and blocked storage, copying and clipboard failure, keyboard navigation, responsive layouts, accessibility, and prerendered content without JavaScript.

## Deployment

`.github/workflows/pages.yml` installs the locked dependencies, checks Svelte and TypeScript, builds the static site, and uploads `docs/build/` with the official Pages actions. In the repository settings, use **Pages → Build and deployment → Source: GitHub Actions**.

The Airflow container and its Docker build workflow are independent of the website.
