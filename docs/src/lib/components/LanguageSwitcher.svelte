<script lang="ts">
  import { useI18n } from "$lib/i18n.svelte";
  const i18n = useI18n();
  const languages = ["en", "ru"] as const;
</script>

<div class="language-switch" role="group" aria-label="Language / Язык">
  {#each languages as language, index (language)}
    {#if index}<span aria-hidden="true">/</span>{/if}
    <button
      type="button"
      data-lang={language}
      aria-pressed={i18n.language === language}
      lang={language}
      onclick={() => i18n.setLanguage(language)}
      >{language.toUpperCase()}</button
    >
  {/each}
</div>

<style>
  .language-switch {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: #706b80;
  }
  .language-switch button {
    background: none;
    border: 0;
    color: #9b96ab;
    min-height: 40px;
    padding: 5px;
    font-size: 11px;
    font-weight: 600;
  }
  .language-switch button[aria-pressed="true"] {
    color: #f4f0ff;
  }
  @media (max-width: 390px) {
    .language-switch {
      gap: 0;
    }
  }
</style>
