import { books } from "../../content/bible/books";
import { getBook } from "./repository";

export interface SearchResult {
  book: string;
  bookName: string;
  chapter: number;
  verse: number;
  text: string;
  href: string;
}

export async function searchBible(query: string): Promise<SearchResult[]> {
  const term = query.trim().toLowerCase();

  if (!term) {
    return [];
  }

  const results: SearchResult[] = [];

  for (const metadata of books) {
    const bibleBook = await getBook(metadata.slug);

    if (!bibleBook) continue;

    bibleBook.chapters.forEach((chapter, chapterIndex) => {

  if (!chapter) return;

  chapter.forEach((verse) => {
        if (verse.text.toLowerCase().includes(term)) {
          results.push({
            book: metadata.slug,
            bookName: metadata.name,
            chapter: chapterIndex + 1,
            verse: verse.verse,
            text: verse.text,
            href: `/bible/${metadata.slug}/${chapterIndex + 1}`,
          });
        }
      });
    });
  }

  return results;
}