import {
  getStorage,
  removeStorage,
  setStorage,
} from "../storage";

import type { ReadingPlanProgress } from "./types";

const NAMESPACE = "bible";
const KEY = "reading-plan-progress";

type ReadingPlanProgressStore =
  Record<string, ReadingPlanProgress>;

function getStore(): ReadingPlanProgressStore {
  return (
    getStorage<ReadingPlanProgressStore>(
      KEY,
      {
        namespace: NAMESPACE,
      }
    ) ?? {}
  );
}

function saveStore(
  store: ReadingPlanProgressStore
): void {
  setStorage(KEY, store, {
    namespace: NAMESPACE,
  });
}

export function getReadingPlanProgress(
  planId: string
): ReadingPlanProgress {
  const store = getStore();

  return (
    store[planId] ?? {
      planId,
      completedDays: [],
      updatedAt: new Date().toISOString(),
    }
  );
}

export function saveReadingPlanProgress(
  progress: ReadingPlanProgress
): void {
  const store = getStore();

  store[progress.planId] = {
    ...progress,
    completedDays: [
      ...new Set(progress.completedDays),
    ].sort((a, b) => a - b),
  };

  saveStore(store);
}

export function markDayComplete(
  planId: string,
  day: number
): void {
  const progress =
    getReadingPlanProgress(planId);

  if (
    !progress.completedDays.includes(day)
  ) {
    progress.completedDays.push(day);
  }

  progress.completedDays.sort(
    (a, b) => a - b
  );

  progress.updatedAt =
    new Date().toISOString();

  saveReadingPlanProgress(progress);
}

export function markDayIncomplete(
  planId: string,
  day: number
): void {
  const progress =
    getReadingPlanProgress(planId);

  progress.completedDays =
    progress.completedDays.filter(
      (completedDay) =>
        completedDay !== day
    );

  progress.updatedAt =
    new Date().toISOString();

  saveReadingPlanProgress(progress);
}

export function isDayComplete(
  planId: string,
  day: number
): boolean {
  return getReadingPlanProgress(
    planId
  ).completedDays.includes(day);
}

export function getCompletedDayCount(
  planId: string
): number {
  return getReadingPlanProgress(
    planId
  ).completedDays.length;
}

export function getPlanCompletionPercentage(
  planId: string,
  totalDays: number
): number {
  if (totalDays <= 0) {
    return 0;
  }

  const completedDays =
    getCompletedDayCount(planId);

  return Math.round(
    (completedDays / totalDays) * 100
  );
}

export function clearReadingPlanProgress(
  planId: string
): void {
  const store = getStore();

  delete store[planId];

  if (Object.keys(store).length === 0) {
    removeStorage(KEY, {
      namespace: NAMESPACE,
    });

    return;
  }

  saveStore(store);
}

export function clearAllReadingPlanProgress(): void {
  removeStorage(KEY, {
    namespace: NAMESPACE,
  });
}