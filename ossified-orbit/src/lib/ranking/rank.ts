import type {
  RankedItem,
  RankingOptions,
  SearchableFields,
} from "./types";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function rankByQuery<T>(
  items: T[],
  query: string,
  getFields: (item: T) => SearchableFields,
  options: RankingOptions = {}
): RankedItem<T>[] {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return [];
  }

  const {
    caseSensitive = false,
    wholeWord = false,
    weights = {},
  } = options;

  const search = caseSensitive
    ? trimmedQuery
    : trimmedQuery.toLowerCase();

  const escaped = escapeRegExp(search);

  const pattern = wholeWord
    ? `\\b${escaped}\\b`
    : escaped;

  const regex = new RegExp(pattern, caseSensitive ? "" : "i");

  const ranked: RankedItem<T>[] = [];

  for (const item of items) {
    const fields = getFields(item);

    let score = 0;

    for (const [field, value] of Object.entries(fields)) {
      if (!value) continue;

      const weight = weights[field] ?? 25;

      const text = caseSensitive
        ? value
        : value.toLowerCase();

      if (text === search) {
        score += weight * 10;
      }

      if (text.startsWith(search)) {
        score += weight * 6;
      }

      if (regex.test(text)) {
        score += weight * 3;
      }

      if (text.includes(search)) {
        score += weight;
      }
    }

    if (score > 0) {
      ranked.push({
        item,
        score,
      });
    }
  }

  ranked.sort((a, b) => b.score - a.score);

  return ranked;
}