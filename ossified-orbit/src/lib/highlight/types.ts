export interface HighlightOptions {
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
   * CSS class added to the highlight element.
   * Default: none
   */
  className?: string;

  /**
   * HTML tag used to wrap matches.
   * Default: "mark"
   */
  tagName?: string;
}