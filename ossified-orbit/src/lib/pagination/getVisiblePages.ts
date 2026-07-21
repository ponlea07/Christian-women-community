import { DEFAULT_SIBLING_COUNT } from "./constants";
import type { PaginationItem } from "./types";

export function getVisiblePages(
  currentPage: number,
  totalPages: number,
  siblingCount = DEFAULT_SIBLING_COUNT
): PaginationItem[] {
  if (totalPages <= 7) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
  }

  const pages: PaginationItem[] = [];

  // Always show more pages near the beginning
  if (currentPage <= 3) {
    pages.push(1, 2, 3, 4, "...", totalPages);
    return pages;
  }

  // Always show more pages near the end
  if (currentPage >= totalPages - 2) {
    pages.push(
      1,
      "...",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages
    );
    return pages;
  }

  // Middle pages
  pages.push(
    1,
    "...",
    currentPage - siblingCount,
    currentPage,
    currentPage + siblingCount,
    "...",
    totalPages
  );

  return pages;
}