import { getStorage, removeStorage, setStorage } from "../storage";
import type { Bookmark } from "./types";

const NAMESPACE = "bible";
const KEY = "bookmarks";

export function getBookmarks(): Bookmark[] {
  return (
    getStorage<Bookmark[]>(KEY, {
      namespace: NAMESPACE,
    }) ?? []
  );
}

export function addBookmark(bookmark: Bookmark): void {
  const bookmarks = getBookmarks();

  if (
    bookmarks.some(
      (item) => item.reference === bookmark.reference
    )
  ) {
    return;
  }

  bookmarks.unshift(bookmark);

  setStorage(KEY, bookmarks, {
    namespace: NAMESPACE,
  });
}

export function removeBookmark(id: string): void {
  setStorage(
    KEY,
    getBookmarks().filter(
      (bookmark) => bookmark.id !== id
    ),
    {
      namespace: NAMESPACE,
    }
  );
}

export function isBookmarked(reference: string): boolean {
  return getBookmarks().some(
    (bookmark) => bookmark.reference === reference
  );
}

export function clearBookmarks(): void {
  removeStorage(KEY, {
    namespace: NAMESPACE,
  });
}