<script lang="ts">
  import { useI18n } from "$lib/i18n.svelte";
  import { site } from "$lib/site";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Overview from "$lib/components/Overview.svelte";
  import Architecture from "$lib/components/Architecture.svelte";
  import QuickStart from "$lib/components/QuickStart.svelte";
  import Configuration from "$lib/components/Configuration.svelte";
  import Workflow from "$lib/components/Workflow.svelte";
  import Community from "$lib/components/Community.svelte";
  import Footer from "$lib/components/Footer.svelte";
  const i18n = useI18n();
  const t = $derived(i18n.strings);
</script>

<svelte:head>
  <title>{t.pageTitle}</title>
  <meta name="description" content={t.metaDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Airflow Git Sync" />
  <meta property="og:title" content={t.pageTitle} />
  <meta property="og:description" content={t.metaDescription} />
  <meta property="og:url" content={site.url} />
  <meta
    property="og:locale"
    content={i18n.language === "ru" ? "ru_RU" : "en_US"}
  />
  <meta
    property="og:locale:alternate"
    content={i18n.language === "ru" ? "en_US" : "ru_RU"}
  />
  <link rel="canonical" href={site.url} />
</svelte:head>

<a class="skip-link" href="#main">{t.skip}</a>
<Header />
<main id="main">
  <Hero />
  <Overview />
  <Architecture />
  <QuickStart />
  <Configuration />
  <Workflow />
  <Community />
</main>
<Footer />
