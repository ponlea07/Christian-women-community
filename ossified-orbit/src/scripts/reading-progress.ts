import { saveReadingProgress } from "../lib/reading";

const element = document.getElementById("reading-progress");

if (element instanceof HTMLElement) {
  const { book, bookName, chapter, href } = element.dataset;

  if (book && bookName && chapter && href) {
    saveReadingProgress({
      book,
      bookName,
      chapter: Number(chapter),
      href,
      updatedAt: new Date().toISOString(),
    });
  }
}