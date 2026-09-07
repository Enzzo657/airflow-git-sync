<script lang="ts">
  import { useI18n } from "$lib/i18n.svelte";
  import Logo from "./Logo.svelte";
  import { site } from "$lib/site";
  const i18n = useI18n();
  const t = $derived(i18n.strings);
</script>

<section class="section architecture-section" id="how-it-works">
  <div class="container architecture-layout">
    <div>
      <p class="eyebrow">{t.howLabel}</p>
      <h2>{t.howTitle}</h2>
      <p class="section-description">{t.howText}</p>
      <div class="source-note">
        <span class="mono">fetch → reset → clean → compare</span><a
          href={site.repository + "/blob/main/docker/redeploy.sh"}
          ><span>{t.readScript}</span> ↗</a
        >
      </div>
    </div>
    <div class="architecture">
      <div class="arch-node">
        <span>{t.gitRepository}</span>
        <span class="mono">origin</span>
      </div>
      <div class="arch-line">
        <span>{t.periodicSync}</span>
      </div>
      <div class="arch-node highlighted">
        <Logo />
        Airflow Git Sync
      </div>
      <div class="arch-fork">
        <div>
          <div class="arch-line" aria-hidden="true">↓</div>
          <div class="arch-node">DAGs</div>
          <div class="arch-line">
            <span>{t.sharedFiles}</span>
          </div>
          <div class="arch-node muted-node">Airflow</div>
        </div>
        <div>
          <div class="arch-line" aria-hidden="true">↓</div>
          <div class="arch-node">Plugins</div>
          <div class="arch-line">
            <span>{t.ifChanged}</span>
          </div>
          <div class="arch-node muted-node">
            <span>{t.airflowServices}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .architecture-section {
    background: #0e0c14;
    border-block: 1px solid #262031;
  }
  .architecture-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 115px;
    align-items: center;
  }
  .section-description {
    font-size: 13px;
    max-width: 350px;
    line-height: 1.9;
  }
  .source-note {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 11px;
  }
  .source-note .mono {
    color: #b494d9;
    font-size: 10px;
  }
  .source-note a {
    color: #bfb6cb;
  }
  .architecture {
    max-width: 470px;
    width: 100%;
    justify-self: end;
  }
  .arch-node {
    border: 1px solid #383043;
    background: #15101e;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    padding: 10px;
  }
  .arch-node .mono {
    font-size: 9px;
    color: #a195ad;
  }
  .arch-node.highlighted {
    border-color: #8355b3;
    color: #e0c6ff;
    background: #261632;
  }
  .arch-line {
    height: 43px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    color: #a894c0;
    text-align: center;
    line-height: 1.4;
  }
  .arch-line:before,
  .arch-line:after {
    content: "";
    position: absolute;
    left: 50%;
    height: 8px;
    width: 1px;
    background: #7d569d;
  }
  .arch-line:before {
    top: 0;
  }
  .arch-line:after {
    bottom: 0;
  }
  .arch-fork {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .muted-node {
    background: #100e17;
    color: #bdb2ca;
  }
  @media (max-width: 1080px) {
    .architecture-layout {
      gap: 60px;
    }
  }
  @media (max-width: 760px) {
    .architecture-layout {
      grid-template-columns: 1fr;
      gap: 35px;
    }
    .section-description {
      max-width: none;
    }
    .architecture {
      justify-self: center;
    }
  }
</style>
