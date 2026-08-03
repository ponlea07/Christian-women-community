import { getStorage, removeStorage, setStorage } from "../storage";
import type { ReadingProgress } from "./types";

const NAMESPACE = "bible";
const KEY = "reading-progress";

export function saveReadingProgress(
  progress: ReadingProgress
): void {
  setStorage(KEY, progress, {
    namespace: NAMESPACE,
  });
}

export function getReadingProgress(): ReadingProgress | null {
  return getStorage<ReadingProgress>(KEY, {
    namespace: NAMESPACE,
  });
}

export function clearReadingProgress(): void {
  removeStorage(KEY, {
    namespace: NAMESPACE,
  });
}