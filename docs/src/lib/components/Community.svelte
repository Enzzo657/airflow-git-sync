<script lang="ts">
  import { useI18n } from "$lib/i18n.svelte";
  import { site } from "$lib/site";
  const i18n = useI18n();
  const t = $derived(i18n.strings);
</script>

<section class="container community">
  <div>
    <p class="eyebrow">{t.communityLabel}</p>
    <h2>{t.communityTitle}</h2>
    <p>{t.communityText}</p>
  </div>
  <div class="community-links">
    <a class="button primary" href={site.repository}
      ><span>{t.viewSource}</span> ↗</a
    ><a href={site.repository + "/issues"}><span>{t.reportIssue}</span> ↗</a><a
      href={site.repository + "/pulls"}><span>{t.contribute}</span> ↗</a
    >
  </div>
</section>

<style>
  .community {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 70px;
    background:
      radial-gradient(ellipse at top right, #55248620, transparent 70%), #14101b;
    border: 1px solid #3b2c4c;
    border-radius: 7px;
    padding: 44px;
    margin-bottom: 70px;
    max-width: 1120px;
  }
  .community .eyebrow {
    font-size: 9px;
    margin-bottom: 20px;
  }
  .community h2 {
    font-size: 29px;
  }
  .community p:not(.eyebrow) {
    font-size: 12px;
    max-width: 515px;
    line-height: 1.85;
    margin: 0;
  }
  .community-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
    font-size: 11px;
    color: #b6a6ca;
  }
  .community-links .button {
    min-width: 165px;
  }
  @media (max-width: 1080px) {
    .community {
      margin-inline: 32px;
    }
  }
  @media (max-width: 760px) {
    .community {
      margin: 0 22px 45px;
      padding: 28px;
      display: block;
    }
    .community-links {
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 25px;
    }
    .community-links .button {
      min-width: 0;
    }
    .community-links > a:not(.button) {
      align-self: center;
    }
    .community h2 {
      font-size: 27px;
    }
  }
  @media (max-width: 390px) {
    .community {
      margin-inline: 17px;
      padding: 23px;
    }
  }
</style>
