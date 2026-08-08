import type { VerseHighlight } from "./types";

const STORAGE_KEY = "bible-verse-highlights";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getHighlights(): VerseHighlight[] {
  if (!isBrowser()) {
    return [];
  }

  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return [];
  }

  try {
    return JSON.parse(stored) as VerseHighlight[];
  } catch {
    return [];
  }
}

function saveHighlights(
  highlights: VerseHighlight[]
): void {
  if (!isBrowser()) {
    return;
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(highlights)
  );
}

export function isHighlighted(
  book: string,
  chapter: number,
  verse: number
): boolean {
  return getHighlights().some(
    (item) =>
      item.book === book &&
      item.chapter === chapter &&
      item.verse === verse
  );
}

export function toggleHighlight(data: {
  book: string;
  bookName: string;
  chapter: number;
  verse: number;
  text: string;
}): boolean {
  const highlights = getHighlights();

  const index = highlights.findIndex(
    (item) =>
      item.book === data.book &&
      item.chapter === data.chapter &&
      item.verse === data.verse
  );

  // Already highlighted → remove it
  if (index >= 0) {
    highlights.splice(index, 1);
    saveHighlights(highlights);
    return false;
  }

  // Add highlight
  highlights.push({
    id: crypto.randomUUID(),
    book: data.book,
    bookName: data.bookName,
    chapter: data.chapter,
    verse: data.verse,
    reference: `${data.bookName} ${data.chapter}:${data.verse}`,
    text: data.text,
    color: "yellow",
    createdAt: new Date().toISOString(),
  });

  saveHighlights(highlights);

  return true;
}

export function clearHighlights(): void {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
}
export function getHighlight(
  book: string,
  chapter: number,
  verse: number
): VerseHighlight | undefined {
  return getHighlights().find(
    (item) =>
      item.book === book &&
      item.chapter === chapter &&
      item.verse === verse
  );
}