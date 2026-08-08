export type HighlightColor =
  | "yellow"
  | "green"
  | "blue"
  | "pink";

export interface VerseHighlight {
  id: string;

  book: string;

  bookName: string;

  chapter: number;

  verse: number;

  reference: string;

  text: string;

  color: HighlightColor;

  createdAt: string;
}