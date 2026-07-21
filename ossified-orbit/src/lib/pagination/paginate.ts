import type { PaginationResult } from "./types";
import { DEFAULT_PAGE_SIZE } from "./constants";
import { getVisiblePages } from "./getVisiblePages";
export function paginate<T>(
  items: T[],
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE
): PaginationResult<T> {
  const totalItems = items.length;

  const totalPages = Math.max(
    1,
    Math.ceil(totalItems / pageSize)
  );

  const currentPage = Math.min(
    Math.max(page, 1),
    totalPages
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return {
    items: items.slice(startIndex, endIndex),

    currentPage,

    pageSize,

    totalItems,

    totalPages,

    startItem: totalItems === 0 ? 0 : startIndex + 1,

    endItem: Math.min(endIndex, totalItems),

    hasPrevious: currentPage > 1,

    hasNext: currentPage < totalPages,

    visiblePages: getVisiblePages(currentPage, totalPages),
  };
}