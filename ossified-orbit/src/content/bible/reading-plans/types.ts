export interface ReadingPlanDay {
  day: number;
  title: string;
  readings: ReadingPlanReading[];
}

export interface ReadingPlanReading {
  book: string;
  bookName: string;
  chapter: number;
  href: string;
}

export interface ReadingPlan {
  id: string;
  title: string;
  description: string;
  duration: number;
  durationLabel: string;
  category: string;
  icon: string;
  days: ReadingPlanDay[];
}