export interface PaginationResult<T> {
  items: T[];

  page: number;

  pageSize: number;

  totalItems: number;

  totalPages: number;

  startItem: number;

  endItem: number;

  hasPrevious: boolean;

  hasNext: boolean;
}