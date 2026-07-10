import { books } from "../../content/bible/books";

export interface ChapterLink {
  book: string;
  chapter: number;
}

export interface ChapterNavigation {
  previous: ChapterLink | null;
  next: ChapterLink | null;
}

export function getChapterNavigation(
  slug: string,
  chapter: number
): ChapterNavigation {

  const index = books.findIndex(book => book.slug === slug);

  if (index === -1) {
    throw new Error(`Unknown book: ${slug}`);
  }

  const current = books[index];

  let previous: ChapterLink | null = null;
  let next: ChapterLink | null = null;

  // Previous chapter
  if (chapter > 1) {
    previous = {
      book: current.slug,
      chapter: chapter - 1,
    };
  } else if (index > 0) {
    const prevBook = books[index - 1];

    previous = {
      book: prevBook.slug,
      chapter: prevBook.chapters,
    };
  }

  // Next chapter
  if (chapter < current.chapters) {
    next = {
      book: current.slug,
      chapter: chapter + 1,
    };
  } else if (index < books.length - 1) {
    const nextBook = books[index + 1];

    next = {
      book: nextBook.slug,
      chapter: 1,
    };
  }

  return {
    previous,
    next,
  };
}