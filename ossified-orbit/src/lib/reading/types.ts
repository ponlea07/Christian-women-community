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