import type { BibleBook } from "../../content/bible/types";

const books = import.meta.glob(
  "../../data/bible/translations/web/*.json",
  {
    import: "default",
  }
);

export async function getBook(slug: string): Promise<BibleBook | null> {
  // Convert route slug (1-chronicles) to filename (1chronicles)
  const fileSlug = slug.replace(/-/g, "");

  const loader =
    books[`../../data/bible/translations/web/${fileSlug}.json`];

  if (!loader) {
    return null;
  }

  return (await loader()) as BibleBook;
}