<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import { provideI18n } from "$lib/i18n.svelte";
  import "../app.css";
  let { children }: { children: Snippet } = $props();
  const i18n = provideI18n();
  onMount(() => {
    i18n.restore();
  });
  $effect(() => {
    document.documentElement.lang = i18n.language;
  });
</script>

{@render children()}
