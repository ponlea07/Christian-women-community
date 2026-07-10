import type { BibleBook } from "../../content/bible/types";

const books = import.meta.glob(
  "../../data/bible/translations/web/*.json",
  {
    import: "default",
  }
);

export async function getBook(slug: string): Promise<BibleBook | null> {
  const loader =
    books[`../../data/bible/translations/web/${slug}.json`];

  if (!loader) {
    return null;
  }

  return (await loader()) as BibleBook;
}