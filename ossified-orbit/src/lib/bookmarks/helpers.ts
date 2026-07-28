import type { Bookmark } from "./types";

export function sortBookmarks(
  bookmarks: Bookmark[]
): Bookmark[] {
  return [...bookmarks].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );
}