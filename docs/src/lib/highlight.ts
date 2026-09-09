type Token = {
  text: string;
  kind: "plain" | "key" | "variable" | "value" | "command";
};

// These tokens are rendered as escaped Svelte text, never injected HTML.
export function highlight(source: string): Token[] {
  const pattern =
    /(^[ \t]*[\w-]+(?=:)|\$\{[^}\n]+\}|https?:\/\/[^\s]+|^docker(?= ))/gm;
  const result: Token[] = [];
  let cursor = 0;
  for (const match of source.matchAll(pattern)) {
    if (match.index > cursor)
      result.push({ text: source.slice(cursor, match.index), kind: "plain" });
    const text = match[0];
    const kind = text.startsWith("${")
      ? "variable"
      : text.startsWith("http")
        ? "value"
        : text === "docker"
          ? "command"
          : "key";
    result.push({ text, kind });
    cursor = match.index + text.length;
  }
  if (cursor < source.length)
    result.push({ text: source.slice(cursor), kind: "plain" });
  return result;
}
