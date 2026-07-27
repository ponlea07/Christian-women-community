import type { StorageOptions } from "./types";

function buildKey(
  key: string,
  options: StorageOptions
): string {
  if (!options.namespace) {
    return key;
  }

  return `${options.namespace}:${key}`;
}

export function setStorage<T>(
  key: string,
  value: T,
  options: StorageOptions = {}
): void {
  const storageKey = buildKey(key, options);

  localStorage.setItem(
    storageKey,
    JSON.stringify(value)
  );
}

export function getStorage<T>(
  key: string,
  options: StorageOptions = {}
): T | null {
  const storageKey = buildKey(key, options);

  const value = localStorage.getItem(storageKey);

  if (value === null) {
    return null;
  }

  return JSON.parse(value) as T;
}

export function removeStorage(
  key: string,
  options: StorageOptions = {}
): void {
  const storageKey = buildKey(key, options);

  localStorage.removeItem(storageKey);
}

export function clearStorage(
  options: StorageOptions = {}
): void {
  if (!options.namespace) {
    localStorage.clear();
    return;
  }

  const prefix = `${options.namespace}:`;

  for (const key of Object.keys(localStorage)) {
    if (key.startsWith(prefix)) {
      localStorage.removeItem(key);
    }
  }
}