import { createReadingPlan } from "./generators";

export const readingPlans = [
  createReadingPlan({
    id: "bible-in-one-year",
    title: "Read the Bible in One Year",
    description:
      "Journey through the whole Bible with a daily reading schedule.",
    duration: 365,
    durationLabel: "365 days",
    category: "Whole Bible",
    icon: "📖",
    startBook: "genesis",
    endBook: "revelation",
  }),

  createReadingPlan({
    id: "new-testament-90",
    title: "New Testament in 90 Days",
    description:
      "Read through the New Testament with a focused 90-day journey.",
    duration: 90,
    durationLabel: "90 days",
    category: "New Testament",
    icon: "✝️",
    startBook: "matthew",
    endBook: "revelation",
  }),

  createReadingPlan({
    id: "gospels-30",
    title: "Gospels in 30 Days",
    description:
      "Walk through Matthew, Mark, Luke and John in 30 days.",
    duration: 30,
    durationLabel: "30 days",
    category: "Gospels",
    icon: "❤️",
    startBook: "matthew",
    endBook: "john",
  }),
];
