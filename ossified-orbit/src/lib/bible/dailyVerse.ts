export interface DailyVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
  reference: string;
}

export function getDailyVerse(): DailyVerse {
  return {
    book: "proverbs",
    chapter: 3,
    verse: 5,
    reference: "Proverbs 3:5",

    text:
      "Trust in Yahweh with all your heart, and don’t lean on your own understanding."
  };
}