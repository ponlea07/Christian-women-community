import {
  getBookmarks,
  sortBookmarks,
  removeBookmark,
  formatRelativeDate,
} from "../lib/bookmarks";

const container = document.getElementById("bookmarks-list");

function render(): void {
  if (!(container instanceof HTMLDivElement)) {
    return;
  }

  const bookmarks = sortBookmarks(getBookmarks());

  if (bookmarks.length === 0) {
    container.innerHTML = `
      <div class="empty-bookmarks">
        <div class="empty-icon">🔖</div>

        <h2>No bookmarks yet</h2>

        <p>
          As you read Scripture, click the bookmark button to save passages for quick access.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = bookmarks
    .map(
      (bookmark) => `
        <article class="bookmark-card">
          <div class="bookmark-content">
            <h3>${bookmark.reference}</h3>

            <p>${bookmark.bookName} • Chapter ${bookmark.chapter}</p>

            <small class="bookmark-date">
              ${formatRelativeDate(bookmark.createdAt)}
            </small>
          </div>

          <div class="bookmark-actions">
            <a
              class="bookmark-open"
              href="${bookmark.href}"
            >
              Open
            </a>

            <button
              type="button"
              class="bookmark-delete"
              data-id="${bookmark.id}"
              aria-label="Delete bookmark for ${bookmark.reference}"
            >
              Delete
            </button>
          </div>
        </article>
      `
    )
    .join("");

  container
    .querySelectorAll<HTMLButtonElement>(".bookmark-delete")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.id;

        if (!id) {
          return;
        }

        removeBookmark(id);

        render();
      });
    });
}

render();