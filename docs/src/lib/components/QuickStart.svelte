<script lang="ts">
  import { useI18n } from "$lib/i18n.svelte";
  import CodeBlock from "./CodeBlock.svelte";
  import { examples } from "$lib/examples";
  import { site } from "$lib/site";
  const i18n = useI18n();
  const t = $derived(i18n.strings);
  const steps = [
    {
      title: "pullTitle",
      description: "pullText",
      note: null,
      examples: ["pull"],
    },
    {
      title: "composeTitle",
      description: "composeText",
      note: "socketNote",
      examples: ["compose"],
    },
    {
      title: "envTitle",
      description: "envText",
      note: "authNote",
      examples: ["environment"],
    },
    {
      title: "runTitle",
      description: "runText",
      note: null,
      examples: ["dependency", "start"],
    },
  ] as const;
</script>

<section class="section container" id="quick-start">
  <p class="eyebrow">{t.startLabel}</p>
  <div class="section-heading">
    <div>
      <h2>{t.startTitle}</h2>
      <p>{t.startIntro}</p>
    </div>
    <a
      class="text-link"
      href={site.repository + "/blob/main/docker-compose.yml"}
      ><span>{t.composeSource}</span>
      ↗</a
    >
  </div>
  <div class="quick-steps">
    {#each steps as step, index (step.title)}
      <article class="quick-step">
        <div class="step-description">
          <span class="step-number">0{index + 1}</span>
          <h3>{t[step.title]}</h3>
          <p>{t[step.description]}</p>
          {#if step.note}<p class="note">{t[step.note]}</p>{/if}
        </div>
        <div class="step-code">
          {#each step.examples as key (key)}<CodeBlock
              {...examples[key]}
            />{/each}
        </div>
      </article>
    {/each}
  </div>
  <div class="callout">
    <span aria-hidden="true">↳</span>
    <p>{t.syncCaution}</p>
  </div>
</section>

<style>
  .quick-steps {
    margin-top: 48px;
  }
  .quick-step > div {
    min-width: 0;
  }
  .quick-step {
    display: grid;
    grid-template-columns: 310px 1fr;
    gap: 65px;
    padding-block: 31px;
    border-top: 1px solid var(--border);
    align-items: start;
  }
  .step-number {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--purple);
    display: block;
    margin-bottom: 13px;
  }
  .step-description h3 {
    font-size: 18px;
    margin-bottom: 14px;
  }
  .step-description p {
    font-size: 13px;
    line-height: 1.9;
  }
  .step-description .note {
    border-left: 1px solid #564068;
    padding-left: 12px;
    margin-top: 22px;
    font-size: 11px;
  }
  .quick-step > :global(.terminal),
  .quick-step > div > :global(.terminal) {
    margin-top: 3px;
  }
  .quick-step > div > :global(.terminal) + :global(.terminal) {
    margin-top: 15px;
  }
  .callout {
    display: flex;
    gap: 15px;
    background: #17111f;
    border: 1px solid #392c49;
    border-radius: 5px;
    padding: 17px 22px;
    margin-top: 16px;
  }
  .callout > span {
    color: var(--purple);
    font-size: 20px;
  }
  .callout p {
    font-size: 12px;
    color: #b9aacb;
    line-height: 1.8;
    margin: 0;
  }
  @media (max-width: 1080px) {
    .quick-step {
      grid-template-columns: 270px 1fr;
      gap: 35px;
    }
  }
  @media (max-width: 760px) {
    .quick-step {
      grid-template-columns: 1fr;
      gap: 10px;
      padding-block: 27px;
    }
    .step-description p {
      font-size: 13px;
    }
    .step-description .note {
      font-size: 12px;
    }
    .step-number {
      float: left;
      margin-right: 12px;
      margin-top: 3px;
    }
    .step-description h3 {
      line-height: 1.4;
    }
    .quick-steps {
      margin-top: 30px;
    }
  }
</style>
