<script lang="ts">
  import { useI18n } from "$lib/i18n.svelte";
  const i18n = useI18n();
  const t = $derived(i18n.strings);
  const variables = [
    { name: "REPO_URL", defaultValue: null, description: "variable0" },
    { name: "SYNC_ROOT", defaultValue: null, description: "variable1" },
    { name: "GIT_BRANCH", defaultValue: null, description: "variable2" },
    { name: "SYNC_INTERVAL", defaultValue: "10", description: "variable3" },
    {
      name: "AIRFLOW_RESTART_SERVICES",
      defaultValue: null,
      description: "variable4",
    },
  ] as const;
</script>

<section class="section container" id="configuration">
  <p class="eyebrow">{t.configLabel}</p>
  <div class="section-heading">
    <div>
      <h2>{t.configTitle}</h2>
      <p>{t.configIntro}</p>
    </div>
    <span class="mono subtle">{t.environment}</span>
  </div>
  <div class="config-wrap">
    <table>
      <caption class="sr-only">
        <span>{t.configCaption}</span>
      </caption>
      <thead>
        <tr>
          <th scope="col"><span>{t.variable}</span></th>
          <th scope="col"><span>{t.default}</span></th>
          <th scope="col">
            <span>{t.description}</span>
          </th>
        </tr>
      </thead>
      <tbody
        >{#each variables as variable (variable.name)}<tr
            ><th scope="row"><code>{variable.name}</code></th><td
              ><span class="mobile-label">{t.default}: </span><span
                class="default-value"
                >{#if variable.defaultValue}<code>{variable.defaultValue}</code
                  >{:else}{t.required}{/if}</span
              ></td
            ><td>{t[variable.description]}</td></tr
          >{/each}</tbody
      >
    </table>
  </div>
</section>

<style>
  #configuration {
    border-top: 1px solid var(--border);
  }
  .subtle {
    font-size: 9px;
    letter-spacing: 1px;
    color: #9f95ad;
  }
  .config-wrap {
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
    text-align: left;
  }
  thead {
    background: #17131f;
    color: #b9aec8;
  }
  thead th {
    padding: 13px 20px;
    font-size: 10px;
    font-weight: 500;
  }
  tbody tr {
    border-top: 1px solid var(--border);
  }
  tbody th,
  tbody td {
    padding: 22px 20px;
    vertical-align: top;
  }
  tbody th {
    font-weight: 400;
    font-size: 11px;
    color: #c6a8f6;
    white-space: nowrap;
  }
  tbody td {
    color: #aaa1b8;
    font-size: 12px;
    line-height: 1.8;
  }
  tbody td:nth-child(2) {
    white-space: nowrap;
    font-size: 10px;
    width: 125px;
  }
  .default-value {
    padding: 3px 6px;
    border: 1px solid #332a3d;
    background: #15111c;
    border-radius: 3px;
    color: #c6b8d7;
  }
  .mobile-label {
    display: none;
  }
  @media (max-width: 760px) {
    .config-wrap {
      border: 0;
      border-radius: 0;
    }
    table,
    tbody,
    tr,
    th,
    td {
      display: block;
    }
    thead {
      display: none;
    }
    tbody {
      display: grid;
      gap: 12px;
    }
    tbody tr {
      border: 1px solid var(--border);
      border-radius: 5px;
      background: #101017;
      padding: 18px;
    }
    tbody th,
    tbody td {
      padding: 0;
    }
    tbody th {
      font-size: 12px;
      white-space: normal;
      overflow-wrap: anywhere;
    }
    tbody td {
      font-size: 12px;
      margin-top: 13px;
    }
    tbody td:nth-child(2) {
      width: auto;
    }
    .mobile-label {
      display: inline;
    }
    .subtle {
      display: none;
    }
  }
</style>
