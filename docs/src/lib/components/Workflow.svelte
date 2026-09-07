<script lang="ts">
  import { useI18n } from "$lib/i18n.svelte";
  const i18n = useI18n();
  const t = $derived(i18n.strings);
  const steps = [
    { title: "workflowName0", description: "workflowDesc0" },
    { title: "workflowName1", description: "workflowDesc1" },
    { title: "workflowName2", description: "workflowDesc2" },
    { title: "workflowName3", description: "workflowDesc3" },
  ] as const;
</script>

<section class="section container workflow-section">
  <p class="eyebrow">{t.workflowLabel}</p>
  <h2>{t.workflowTitle}</h2>
  <ol class="workflow-list">
    {#each steps as step, index (step.title)}<li>
        <span class="workflow-index">0{index + 1}</span><strong
          >{t[step.title]}</strong
        ><small>{t[step.description]}</small>
      </li>{/each}
  </ol>
  <div class="workflow-branch">
    <span aria-hidden="true">↳</span><span>{t.workflowBranch}</span>
  </div>
</section>

<style>
  .workflow-section {
    border-top: 1px solid var(--border);
  }
  .workflow-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 40px 0 0;
    gap: 25px;
  }
  .workflow-list li {
    position: relative;
    border-top: 1px solid #433252;
    padding-top: 20px;
  }
  .workflow-list li:not(:last-child):after {
    content: "→";
    position: absolute;
    right: 0;
    top: 17px;
    color: #9875b9;
  }
  .workflow-index {
    font-size: 10px;
    font-family: var(--mono);
    color: var(--purple);
    display: block;
    margin-bottom: 18px;
  }
  .workflow-list strong {
    display: block;
    font-size: 13px;
    font-weight: 500;
  }
  .workflow-list small {
    display: block;
    font-size: 11px;
    color: var(--muted);
    margin-top: 7px;
  }
  .workflow-branch {
    font-size: 11px;
    color: #b4a2c8;
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 13px;
  }
  .workflow-branch > span[aria-hidden] {
    font-size: 22px;
    color: var(--purple);
  }
  @media (max-width: 760px) {
    .workflow-list {
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
  }
</style>
