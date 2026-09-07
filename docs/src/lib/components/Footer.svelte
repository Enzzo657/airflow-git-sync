<script lang="ts">
  import { useI18n } from "$lib/i18n.svelte";
  import Logo from "./Logo.svelte";
  import { site } from "$lib/site";
  const i18n = useI18n();
  const t = $derived(i18n.strings);
</script>

<footer class="container footer">
  <a class="brand" href="#overview"><Logo /><span>Airflow Git Sync</span></a
  ><span><span>{t.footerLicense}</span></span>
  <div>
    <a href={site.repository + "/blob/main/LICENSE"}><span>{t.license}</span></a
    ><a href={site.repository}>GitHub ↗</a>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    min-height: 100px;
    font-size: 10px;
    color: #a79caf;
  }
  .footer .brand {
    font-size: 12px;
    color: #c6bfd0;
  }
  .footer :global(.logo) {
    width: 25px;
    height: 25px;
  }
  .footer > div {
    display: flex;
    gap: 20px;
  }
  @media (max-width: 760px) {
    .footer {
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 15px 25px;
      padding-block: 25px;
    }
    .footer > div {
      margin-left: auto;
    }
    .footer > .brand {
      width: 100%;
    }
  }
</style>
