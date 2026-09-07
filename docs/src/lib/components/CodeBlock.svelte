<script lang="ts">
  import { onDestroy } from "svelte";
  import { useI18n } from "$lib/i18n.svelte";
  import { highlight } from "$lib/highlight";
  let { name, code }: { name: string; code: string } = $props();
  const i18n = useI18n();
  const t = $derived(i18n.strings);
  const tokens = $derived(highlight(code));
  let status = $state<"idle" | "copied" | "failed">("idle");
  let pending = $state(false);
  let timer: ReturnType<typeof setTimeout> | undefined;
  let active = true;
  const message = $derived(
    status === "copied" ? t.copied : status === "failed" ? t.copyFailed : "",
  );
  async function copy() {
    pending = true;
    clearTimeout(timer);
    try {
      await navigator.clipboard.writeText(code);
      if (active) status = "copied";
    } catch {
      if (active) status = "failed";
    } finally {
      if (active) {
        pending = false;
        timer = setTimeout(
          () => {
            status = "idle";
          },
          status === "failed" ? 4000 : 1800,
        );
      }
    }
  }
  onDestroy(() => {
    active = false;
    clearTimeout(timer);
  });
</script>

<div class="terminal">
  <div class="terminal-bar">
    <span class="terminal-dots" aria-hidden="true"><i></i><i></i><i></i></span>
    <span>{name}</span>
    <button class="copy" type="button" disabled={pending} onclick={copy}
      >{status === "copied" ? t.copied : t.copy}</button
    >
  </div>
  <!-- svelte-ignore a11y_no_noninteractive_tabindex (Scrollable code needs keyboard focus for horizontal navigation.) -->
  <pre tabindex="0" role="region" aria-label={`${t.codeExample}: ${name}`}><code
      >{#each tokens as token, index (index)}<span
          class:syntax-key={token.kind === "key"}
          class:syntax-variable={token.kind === "variable"}
          class:syntax-value={token.kind === "value"}
          class:syntax-command={token.kind === "command"}>{token.text}</span
        >{/each}</code
    ></pre>
  <p
    class:sr-only={status !== "failed"}
    class="copy-status"
    role="status"
    aria-live="polite"
  >
    {message}
  </p>
</div>

<style>
  pre {
    font-family: var(--mono);
  }
  .terminal {
    border: 1px solid #302938;
    background: #101017;
    border-radius: 6px;
    overflow: hidden;
    min-width: 0;
  }
  .terminal-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid #24202d;
    background: #15121d;
    padding: 8px 15px;
    min-height: 38px;
    font-family: var(--mono);
    color: #a69ab7;
    font-size: 10px;
  }
  .terminal-dots {
    display: flex;
    gap: 4px;
  }
  .terminal-dots i {
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #5a466a;
  }
  .terminal-dots i:nth-child(2) {
    background: #45394f;
  }
  .terminal-dots i:nth-child(3) {
    background: #342d3c;
  }
  .copy {
    margin-left: auto;
    padding: 3px 6px;
    color: #c5b6d9;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 10px;
    line-height: 1.5;
    max-width: 190px;
  }
  .copy:hover {
    background: #292034;
    border-color: #473554;
  }
  pre {
    padding: 20px;
    margin: 0;
    overflow: auto;
    font-size: 12px;
    line-height: 1.95;
    color: #cdc5df;
    tab-size: 2;
  }
  pre code {
    font-size: inherit;
  }
  @media (max-width: 760px) {
    pre {
      font-size: 11px;
      padding: 17px;
    }
  }

  .syntax-key {
    color: #c3a6f0;
  }
  .syntax-variable {
    color: #d5b981;
  }
  .syntax-value {
    color: #afc4a6;
  }
  .syntax-command {
    color: #bfa2ed;
  }
  .copy-status:not(.sr-only) {
    margin: 0;
    padding: 0 20px 16px;
    font-size: 12px;
    color: var(--purple);
  }
</style>
