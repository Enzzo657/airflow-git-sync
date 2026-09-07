<script lang="ts">
  import { useI18n } from "$lib/i18n.svelte";
  import Logo from "./Logo.svelte";
  const i18n = useI18n();
  const t = $derived(i18n.strings);
  const features = [
    { icon: "↻", title: "featureTitle0", description: "featureText0" },
    { icon: "⑂", title: "featureTitle1", description: "featureText1" },
    { icon: "◇", title: "featureTitle2", description: "featureText2" },
    { icon: "↗", title: "featureTitle3", description: "featureText3" },
    { icon: "▣", title: "featureTitle4", description: "featureText4" },
    { icon: "⌘", title: "featureTitle5", description: "featureText5" },
  ] as const;
</script>

<section class="section container" aria-labelledby="less-title">
  <div class="section-heading">
    <div>
      <p class="eyebrow">{t.overviewLabel}</p>
      <h2 id="less-title">{t.lessTitle}</h2>
    </div>
    <p>{t.lessText}</p>
  </div>
  <div class="comparison">
    <div class="flow-row old-flow">
      <div class="flow-label">{t.manualWorkflow}</div>
      <div class="flow-steps">
        <span>git push</span><b aria-hidden="true">→</b><span
          ><span>{t.manualUpdate}</span></span
        ><b aria-hidden="true">→</b><span><span>{t.manualSync}</span></span><b
          aria-hidden="true">→</b
        ><span>Airflow</span>
      </div>
    </div>
    <div class="flow-row new-flow">
      <div class="flow-label">{t.withSync}</div>
      <div class="flow-steps">
        <span>git push</span><b aria-hidden="true">→</b><span
          class="flow-highlight"
          ><Logo />
          Airflow Git Sync</span
        ><b aria-hidden="true">→</b><span>Airflow</span>
      </div>
    </div>
  </div>
  <div class="features">
    {#each features as feature (feature.title)}
      <article class="feature">
        <span class="feature-icon" aria-hidden="true">{feature.icon}</span>
        <h3>{t[feature.title]}</h3>
        <p>{t[feature.description]}</p>
      </article>
    {/each}
  </div>
</section>

<style>
  .comparison {
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .flow-row {
    padding: 23px 25px;
    display: grid;
    grid-template-columns: 165px 1fr;
    align-items: center;
    gap: 22px;
  }
  .flow-label {
    font-size: 11px;
    color: #a49bb4;
  }
  .flow-steps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 13px;
    font-size: 11px;
  }
  .flow-steps > b {
    color: #74647d;
    font-weight: 400;
  }
  .old-flow {
    background: #101016;
    border-bottom: 1px solid var(--border);
  }
  .old-flow .flow-steps {
    color: #a09aaa;
  }
  .new-flow {
    background: #161021;
  }
  .new-flow .flow-label {
    color: #c0a7e7;
  }
  .flow-highlight {
    display: flex;
    gap: 6px;
    align-items: center;
    color: #ceafff;
  }
  .flow-highlight :global(.logo) {
    width: 24px;
    height: 24px;
  }
  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 42px;
    row-gap: 39px;
    margin-top: 60px;
  }
  .feature {
    border-top: 1px solid var(--border);
    padding-top: 25px;
  }
  .feature-icon {
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    color: var(--purple);
    font-size: 25px;
    margin-bottom: 22px;
  }
  .feature h3 {
    font-size: 15px;
    margin-bottom: 12px;
  }
  .feature p {
    font-size: 14px;
    line-height: 1.85;
    margin: 0;
    max-width: 305px;
  }
  @media (max-width: 1080px) {
    .flow-row {
      grid-template-columns: 135px 1fr;
    }
  }
  @media (max-width: 760px) {
    .features {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 40px;
    }
    .flow-row {
      display: block;
      padding: 20px;
    }
    .flow-label {
      margin-bottom: 15px;
    }
    .flow-steps {
      font-size: 10px;
      gap: 8px;
    }
    .old-flow .flow-steps span {
      text-align: center;
    }
  }
  @media (max-width: 390px) {
    .features {
      grid-template-columns: 1fr;
    }
    .feature p {
      max-width: none;
    }
    .feature-icon {
      margin-bottom: 15px;
    }
    .old-flow .flow-steps {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
    }
    .old-flow .flow-steps > b {
      transform: rotate(90deg);
    }
    .new-flow .flow-steps {
      font-size: 9px;
    }
    .flow-highlight :global(.logo) {
      width: 19px;
    }
    .flow-row {
      padding: 16px;
    }
  }
</style>
