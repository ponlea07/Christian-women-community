export async function getBook(slug: string) {
  throw new Error(`getBook("${slug}") has not been implemented yet.`);
}

export async function getChapter(book: string, chapter: number) {
  throw new Error(
    `getChapter("${book}", ${chapter}) has not been implemented yet.`
  );
}

export async function getVerse(
  book: string,
  chapter: number,
  verse: number
) {
  throw new Error(
    `getVerse("${book}", ${chapter}, ${verse}) has not been implemented yet.`
  );
}