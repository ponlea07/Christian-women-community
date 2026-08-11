import { books } from "../books";
import type {
  ReadingPlan,
  ReadingPlanDay,
  ReadingPlanReading,
} from "./types";

function buildChapterList(
  startBook: string,
  endBook: string
): ReadingPlanReading[] {
  const startIndex = books.findIndex(
    (book) => book.slug === startBook
  );

  const endIndex = books.findIndex(
    (book) => book.slug === endBook
  );

  if (startIndex === -1 || endIndex === -1) {
    return [];
  }

  const readings: ReadingPlanReading[] = [];

  for (
    let bookIndex = startIndex;
    bookIndex <= endIndex;
    bookIndex++
  ) {
    const book = books[bookIndex];

    for (
      let chapter = 1;
      chapter <= book.chapters;
      chapter++
    ) {
      readings.push({
        book: book.slug,
        bookName: book.name,
        chapter,
        href: `/bible/${book.slug}/${chapter}`,
      });
    }
  }

  return readings;
}

function distributeReadings(
  readings: ReadingPlanReading[],
  numberOfDays: number
): ReadingPlanDay[] {
  if (readings.length === 0 || numberOfDays <= 0) {
    return [];
  }

  const actualDays = Math.min(
    numberOfDays,
    readings.length
  );

  const basePerDay = Math.floor(
    readings.length / actualDays
  );

  const remainder =
    readings.length % actualDays;

  const days: ReadingPlanDay[] = [];

  let readingIndex = 0;

  for (let day = 1; day <= actualDays; day++) {
    const readingsForDay =
      basePerDay + (day <= remainder ? 1 : 0);

    const dayReadings = readings.slice(
      readingIndex,
      readingIndex + readingsForDay
    );

    days.push({
      day,
      title: `Day ${day}`,
      readings: dayReadings,
    });

    readingIndex += readingsForDay;
  }

  return days;
}

export function createReadingPlan(
  plan: Omit<ReadingPlan, "days"> & {
    startBook: string;
    endBook: string;
  }
): ReadingPlan {
  const readings = buildChapterList(
    plan.startBook,
    plan.endBook
  );

  return {
    id: plan.id,
    title: plan.title,
    description: plan.description,
    duration: plan.duration,
    durationLabel: plan.durationLabel,
    category: plan.category,
    icon: plan.icon,
    days: distributeReadings(
      readings,
      plan.duration
    ),
  };
}