import type { HighlightOptions } from "./types";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function highlightText(
  text: string,
  searchTerm: string,
  options: HighlightOptions = {}
): string {
  if (!text || !searchTerm.trim()) {
    return text;
  }

  const {
    caseSensitive = false,
    wholeWord = false,
    className,
    tagName = "mark",
  } = options;

  const escaped = escapeRegExp(searchTerm.trim());

 const pattern = wholeWord ? `\\b${escaped}\\b` : escaped;

  const flags = caseSensitive ? "g" : "gi";

  const regex = new RegExp(pattern, flags);

  const attributes = className
    ? ` class="${className}"`
    : "";

  return text.replace(
    regex,
    (match) => `<${tagName}${attributes}>${match}</${tagName}>`
  );
}