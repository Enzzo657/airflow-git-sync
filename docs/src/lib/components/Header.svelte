<script lang="ts">
  import { MediaQuery } from "svelte/reactivity";
  import { useI18n } from "$lib/i18n.svelte";
  import { site } from "$lib/site";
  import Logo from "./Logo.svelte";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
  const i18n = useI18n();
  const t = $derived(i18n.strings);
  let menuOpen = $state(false);
  let menuButton: HTMLButtonElement;
  const links = [
    { href: "#overview", label: "navOverview" },
    { href: "#how-it-works", label: "navHow" },
    { href: "#quick-start", label: "navStart" },
    { href: "#configuration", label: "navConfig" },
  ] as const;
  function closeMenu() {
    menuOpen = false;
  }
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
      menuButton?.focus();
    }
  }
  const desktop = new MediaQuery("(min-width: 1081px)", false);
  $effect(() => {
    if (desktop.current) closeMenu();
  });
</script>

<svelte:window onkeydown={handleKeydown} />

{#snippet navigation()}
  {#each links as link (link.href)}<a href={link.href} onclick={closeMenu}
      >{t[link.label]}</a
    >{/each}
{/snippet}

<header class="header">
  <div class="container header-inner">
    <a class="brand" href="#overview"
      ><Logo /><span>Airflow <strong>Git Sync</strong></span></a
    >
    <nav class="desktop-nav" aria-label={t.mainNavigation}>
      {@render navigation()}
    </nav>
    <div class="header-actions">
      <LanguageSwitcher />
      <a class="github-header" href={site.repository}
        >GitHub <span aria-hidden="true">↗</span></a
      >
      <button
        bind:this={menuButton}
        class="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        onclick={() => (menuOpen = !menuOpen)}
        >{t.menu} <span aria-hidden="true">☰</span></button
      >
    </div>
  </div>
  <nav
    class="mobile-nav"
    id="mobile-nav"
    aria-label={t.mainNavigation}
    hidden={!menuOpen}
  >
    {@render navigation()}<a href={site.repository} onclick={closeMenu}
      >GitHub ↗</a
    >
  </nav>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 10;
    background: #09090ff5;
    border-bottom: 1px solid #ffffff0c;
  }
  .header-inner {
    height: 78px;
    display: flex;
    align-items: center;
    gap: 32px;
  }
  .desktop-nav {
    display: flex;
    gap: 25px;
    margin-left: auto;
    font-size: 13px;
    color: #b0adbd;
    white-space: nowrap;
  }
  .header-actions {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .github-header {
    font-size: 12px;
    padding: 6px 12px;
    border: 1px solid #393143;
    border-radius: 5px;
    white-space: nowrap;
  }
  .github-header span {
    margin-left: 9px;
    color: #aaa1bd;
  }
  .menu-toggle {
    display: none;
    background: none;
    border: 1px solid var(--border);
    color: var(--text);
    border-radius: 4px;
    padding: 7px 10px;
    font-size: 12px;
  }
  .mobile-nav {
    border-top: 1px solid var(--border);
    padding: 16px 32px;
    background: var(--surface);
  }
  .mobile-nav a {
    display: block;
    padding: 10px 0;
  }
  .mobile-nav[hidden] {
    display: none;
  }
  @media (max-width: 1080px) {
    .desktop-nav {
      display: none;
    }
    .header-actions {
      margin-left: auto;
    }
    .menu-toggle {
      display: block;
    }
  }
  @media (max-width: 760px) {
    .header-inner {
      height: 67px;
      gap: 12px;
    }
    .header-actions {
      gap: 12px;
    }
    .github-header {
      display: none;
    }
    .mobile-nav {
      padding-inline: 22px;
    }
  }
  @media (max-width: 390px) {
    .header-actions {
      gap: 5px;
    }
    .header .brand {
      font-size: 12px;
    }
    .header :global(.logo) {
      width: 26px;
    }
    .menu-toggle {
      font-size: 11px;
      padding: 6px 7px;
    }
  }
</style>
