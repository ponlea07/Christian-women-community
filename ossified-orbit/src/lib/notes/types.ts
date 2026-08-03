export interface Note {
  id: string;

  book: string;
  bookName: string;

  chapter: number;
  verse: number;

  reference: string;
  href: string;

  text: string;

  createdAt: string;
  updatedAt: string;
}