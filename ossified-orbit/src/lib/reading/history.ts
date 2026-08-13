import {
  getStorage,
  removeStorage,
  setStorage,
} from "../storage";

import type { ReadingHistoryEntry } from "./types";

const NAMESPACE = "bible";
const KEY = "reading-history";

function getHistory(): ReadingHistoryEntry[] {
  return (
    getStorage<ReadingHistoryEntry[]>(KEY, {
      namespace: NAMESPACE,
    }) ?? []
  );
}

function saveHistory(
  history: ReadingHistoryEntry[]
): void {
  setStorage(KEY, history, {
    namespace: NAMESPACE,
  });
}

export function getReadingHistory(): ReadingHistoryEntry[] {
  return getHistory();
}

export function addReadingHistory(
  entry: ReadingHistoryEntry
): void {
  const history = getHistory();

  const existingIndex = history.findIndex(
    (item) =>
      item.book === entry.book &&
      item.chapter === entry.chapter
  );

  if (existingIndex >= 0) {
    history.splice(existingIndex, 1);
  }

  history.unshift(entry);

  saveHistory(history);
}

export function removeReadingHistory(
  id: string
): void {
  const history = getHistory().filter(
    (entry) => entry.id !== id
  );

  if (history.length === 0) {
    removeStorage(KEY, {
      namespace: NAMESPACE,
    });

    return;
  }

  saveHistory(history);
}

export function clearReadingHistory(): void {
  removeStorage(KEY, {
    namespace: NAMESPACE,
  });
}