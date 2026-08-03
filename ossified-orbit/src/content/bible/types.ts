export interface BibleVerse {
  verse: number;
  text: string;
}

export type BibleChapter = BibleVerse[];

export interface BibleBook {
  translation: string;
  chapters: BibleChapter[];
}