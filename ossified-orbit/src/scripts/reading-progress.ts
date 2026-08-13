import {
  addReadingHistory,
  saveReadingProgress,
} from "../lib/reading";

const element = document.getElementById(
  "reading-progress"
);

if (element instanceof HTMLElement) {
  const {
    book,
    bookName,
    chapter,
    href,
  } = element.dataset;

  if (
    book &&
    bookName &&
    chapter &&
    href
  ) {
    const now = new Date().toISOString();

    saveReadingProgress({
      book,
      bookName,
      chapter: Number(chapter),
      href,
      updatedAt: now,
    });

    addReadingHistory({
      id: `${book}-${chapter}`,
      book,
      bookName,
      chapter: Number(chapter),
      href,
      readAt: now,
    });
  }
}