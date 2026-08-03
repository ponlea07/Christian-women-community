export interface PaginationResult<T> {
  items: T[];

  currentPage: number;

  pageSize: number;

  totalItems: number;

  totalPages: number;

  startItem: number;

  endItem: number;

  hasPrevious: boolean;

  hasNext: boolean;

  visiblePages: PaginationItem[];
}

export type PaginationItem = number | "...";