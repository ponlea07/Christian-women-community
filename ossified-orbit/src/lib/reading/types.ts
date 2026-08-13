export interface ReadingProgress {
  book: string;
  bookName: string;
  chapter: number;
  href: string;
  verse?: number;
  updatedAt: string;
}
export interface ReadingPlanProgress {
  planId: string;
  completedDays: number[];
  updatedAt: string;
}
export interface ReadingHistoryEntry {
  id: string;

  book: string;
  bookName: string;

  chapter: number;
  href: string;

  readAt: string;
}