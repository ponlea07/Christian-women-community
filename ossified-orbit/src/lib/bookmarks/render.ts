import type { Bookmark } from "./types";

export function renderBookmark(bookmark: Bookmark): string {
  return `
    <article class="bookmark-card">
      <h3>${bookmark.reference}</h3>

      <p>${bookmark.bookName} Chapter ${bookmark.chapter}</p>

      <div class="bookmark-actions">
        <a href="${bookmark.href}" class="bookmark-open">
          Open →
        </a>
      </div>
    </article>
  `;
}