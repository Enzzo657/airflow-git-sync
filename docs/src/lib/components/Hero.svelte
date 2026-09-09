<script lang="ts">
  import { useI18n } from "$lib/i18n.svelte";
  import Logo from "./Logo.svelte";
  import CodeBlock from "./CodeBlock.svelte";
  import { examples } from "$lib/examples";
  import { site } from "$lib/site";
  const i18n = useI18n();
  const t = $derived(i18n.strings);
</script>

<section class="hero container" id="overview">
  <div class="hero-copy">
    <div class="eyebrow">
      <span class="status-dot"></span><span>{t.eyebrow}</span>
    </div>
    <h1>
      <span>{t.headline1}</span><br /><span>{t.headline2}</span><br /><span
        class="gradient-text">{t.headline3}</span
      >
    </h1>
    <p class="hero-description">{t.heroText}</p>
    <div class="button-row">
      <a class="button primary" href="#quick-start"
        ><span>{t.getStarted}</span>
        <span aria-hidden="true">→</span></a
      ><a class="button secondary" href={site.repository}
        ><span>{t.viewGithub}</span>
        <span aria-hidden="true">↗</span></a
      >
    </div>
    <div class="badges">
      <span>Docker</span><span>Apache Airflow</span><span>Git Sync</span><span
        ><span>{t.openSource}</span></span
      >
    </div>
  </div>
  <div class="hero-visual">
    <div class="visual-top">
      <span class="mono">airflow-git-sync</span><span class="visual-label"
        ><span>{t.syncFlow}</span></span
      >
    </div>
    <div class="pipeline-node git-node">
      <span class="node-icon" aria-hidden="true">⑂</span>
      <div>
        <strong><span>{t.gitRepository}</span></strong><small class="mono"
          >origin / GIT_BRANCH</small
        >
      </div>
      <span class="node-tag">Git</span>
    </div>
    <div class="connector"><span>git fetch · reset --hard</span></div>
    <div class="pipeline-node sync-node">
      <Logo />
      <div>
        <strong>Airflow Git Sync</strong><small
          ><span>{t.dockerCompanion}</span></small
        >
      </div>
      <span class="status-dot"></span>
    </div>
    <div class="split-lines" aria-hidden="true"></div>
    <div class="output-nodes">
      <div class="output-node">
        <span class="file-icon" aria-hidden="true">⌘</span><strong>DAGs</strong
        ><small><span>{t.repoUpdates}</span></small>
      </div>
      <div class="output-node">
        <span class="file-icon" aria-hidden="true">◇</span><strong
          >Plugins</strong
        ><small><span>{t.restartOnChange}</span></small>
      </div>
    </div>
    <div class="visual-footer">
      <span class="loop-symbol" aria-hidden="true">↻</span><span
        ><span>{t.intervalLabel}</span></span
      >
    </div>
  </div>
</section>
<div class="container hero-command">
  <div class="hero-terminal"><CodeBlock {...examples.pull} /></div>
  <p>{t.heroNote}</p>
</div>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 66px;
    padding-top: 88px;
    padding-bottom: 45px;
    position: relative;
  }
  .hero:before {
    content: "";
    position: absolute;
    width: 650px;
    height: 580px;
    top: -90px;
    right: 0;
    z-index: -1;
    pointer-events: none;
    background: radial-gradient(ellipse, #6733b51b, transparent 65%);
  }
  .status-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    flex: none;
    border-radius: 100%;
    background: var(--purple);
    box-shadow: 0 0 12px #a78bfa60;
  }
  .hero h1 {
    font-size: clamp(45px, 4.9vw, 66px);
    letter-spacing: -3.3px;
    font-weight: 600;
    line-height: 1.075;
    margin: 0 0 27px;
  }
  .gradient-text {
    color: var(--purple);
    background: linear-gradient(100deg, #c3abff, #9568e9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero-description {
    max-width: 455px;
    font-size: 15px;
    line-height: 1.85;
    margin-bottom: 30px;
  }
  .button-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 28px;
  }
  .badges > span {
    padding: 3px 9px;
    border: 1px solid #292532;
    border-radius: 4px;
    color: #a6a1b5;
    font-size: 10px;
    line-height: 1.7;
  }
  .hero-visual {
    align-self: center;
    padding: 24px;
    border: 1px solid #342846;
    border-radius: 9px;
    background:
      radial-gradient(ellipse at 50% 50%, #31194429, transparent 75%), #0d0c14;
    box-shadow: 0 20px 90px #0005;
    position: relative;
  }
  .visual-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
    gap: 10px;
    font-size: 10px;
    color: #a59ab9;
  }
  .visual-label {
    font-size: 8px;
    letter-spacing: 1.2px;
    color: #a099af;
  }
  .pipeline-node {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px;
    border: 1px solid #34303e;
    background: #14111e;
    border-radius: 6px;
    position: relative;
  }
  .pipeline-node strong {
    display: block;
    font-size: 14px;
    font-weight: 500;
  }
  .pipeline-node small {
    display: block;
    font-size: 10px;
    color: #a19aac;
    margin-top: 3px;
  }
  .node-icon {
    font-size: 29px;
    color: #c8bcdf;
    line-height: 1;
  }
  .node-tag {
    margin-left: auto;
    font-size: 10px;
    color: #a497b5;
    border: 1px solid #3d314e;
    padding: 0 6px;
    border-radius: 3px;
  }
  .connector {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .connector:before {
    content: "";
    height: 100%;
    width: 1px;
    background: #674887;
    position: absolute;
    left: 50%;
  }
  .connector:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 5px;
    border-right: 1px solid #8e69b9;
    border-bottom: 1px solid #8e69b9;
    transform: rotate(45deg);
  }
  .connector span {
    z-index: 1;
    font-family: var(--mono);
    font-size: 9px;
    color: #b59bcf;
    background: #0e0c16;
    padding: 2px 10px;
  }
  .sync-node {
    border-color: #8654bf;
    background: #251635;
    box-shadow: 0 0 28px #9a54e111;
  }
  .sync-node > .status-dot {
    margin-left: auto;
  }
  .split-lines {
    height: 38px;
    position: relative;
    background: linear-gradient(#785299, #785299) center top/1px 19px no-repeat;
  }
  .split-lines:after {
    content: "";
    position: absolute;
    top: 19px;
    left: 25%;
    width: 50%;
    height: 19px;
    border: 1px solid #674887;
    border-bottom: 0;
  }
  .output-nodes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .output-node {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 14px 5px;
    border: 1px solid #30273e;
    border-radius: 5px;
    background: #13101c;
  }
  .output-node strong {
    font-size: 13px;
    font-weight: 500;
  }
  .output-node small {
    font-size: 9px;
    color: #a69aae;
    text-align: center;
    margin-top: 4px;
  }
  .file-icon {
    color: #ae8cd2;
    font-size: 24px;
    margin-bottom: 2px;
    line-height: 1.3;
  }
  .visual-footer {
    margin-top: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    font-size: 9px;
    color: #a49aaf;
  }
  .loop-symbol {
    font-size: 16px;
    color: var(--purple);
  }
  .hero-command {
    display: flex;
    align-items: center;
    gap: 30px;
    padding-bottom: 66px;
    border-bottom: 1px solid var(--border);
  }
  .hero-command .hero-terminal {
    flex: 1;
    max-width: 655px;
  }
  .hero-command p {
    font-size: 11px;
    color: #aaa3b8;
    margin: 0;
    max-width: 220px;
  }
  @media (min-width: 1600px) {
    .hero {
      padding-top: 110px;
      padding-bottom: 65px;
    }
  }
  @media (max-width: 1080px) {
    .hero {
      gap: 35px;
    }
    .hero h1 {
      font-size: 55px;
    }
    .hero-visual {
      padding: 18px;
    }
  }
  @media (max-width: 760px) {
    .hero {
      grid-template-columns: 1fr;
      padding-top: 48px;
      padding-bottom: 30px;
      gap: 43px;
    }
    .hero:before {
      width: 100%;
      height: 550px;
      right: 0;
      top: 0;
    }
    .hero h1 {
      font-size: clamp(43px, 9vw, 65px);
      letter-spacing: -2.4px;
    }
    .hero-description {
      max-width: 540px;
      font-size: 14px;
    }
    .hero-visual {
      width: 100%;
      max-width: 500px;
      margin: auto;
      padding: 24px;
    }
    .hero-command {
      display: block;
      padding-bottom: 40px;
    }
    .hero-command p {
      margin-top: 17px;
      max-width: none;
      text-align: center;
    }
  }
  @media (max-width: 390px) {
    .hero-visual {
      padding: 17px;
    }
  }
</style>
