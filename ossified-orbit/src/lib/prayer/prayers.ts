import {
  getStorage,
  removeStorage,
  setStorage,
} from "../storage";
import type { PrayerEntry } from "./types";

const NAMESPACE = "bible";
const KEY = "prayers";

export function getPrayers(): PrayerEntry[] {
  return (
    getStorage<PrayerEntry[]>(KEY, {
      namespace: NAMESPACE,
    }) ?? []
  );
}

export function getPrayer(id: string): PrayerEntry | undefined {
  return getPrayers().find((prayer) => prayer.id === id);
}

export function addPrayer(prayer: PrayerEntry): void {
  const prayers = getPrayers();

  prayers.unshift(prayer);

  setStorage(KEY, prayers, {
    namespace: NAMESPACE,
  });
}

export function updatePrayer(
  id: string,
  updates: Pick<PrayerEntry, "title" | "content">
): void {
  const prayers = getPrayers();

  const index = prayers.findIndex((prayer) => prayer.id === id);

  if (index === -1) {
    return;
  }

  prayers[index] = {
    ...prayers[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  setStorage(KEY, prayers, {
    namespace: NAMESPACE,
  });
}

export function removePrayer(id: string): void {
  setStorage(
    KEY,
    getPrayers().filter((prayer) => prayer.id !== id),
    {
      namespace: NAMESPACE,
    }
  );
}

export function clearPrayers(): void {
  removeStorage(KEY, {
    namespace: NAMESPACE,
  });
}