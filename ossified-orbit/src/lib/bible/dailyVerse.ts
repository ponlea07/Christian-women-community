import dailyVerse from "../../content/featured/daily-verse";

export interface DailyVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
  reference: string;
}

export function getDailyVerse(): DailyVerse {
  return dailyVerse;
}