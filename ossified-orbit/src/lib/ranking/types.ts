export interface SearchableFields {
  [field: string]: string;
}

export interface RankedItem<T> {
  item: T;
  score: number;
}

export interface RankingOptions {
  /**
   * Match text using case sensitivity.
   * Default: false
   */
  caseSensitive?: boolean;

  /**
   * Match whole words only.
   * Default: false
   */
  wholeWord?: boolean;

  /**
   * Custom weights for searchable fields.
   * Example:
   * {
   *   reference: 100,
   *   book: 80,
   *   text: 50,
   * }
   */
  weights?: Record<string, number>;
}