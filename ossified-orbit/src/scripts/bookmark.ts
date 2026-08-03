import {
  addBookmark,
  isBookmarked,
  removeBookmark,
  getBookmarks,
} from "../lib/bookmarks";

const button = document.getElementById("bookmark-button");

if (button instanceof HTMLButtonElement) {
  const {
    book,
    bookName,
    chapter,
    reference,
    href,
  } = button.dataset;

  if (
    book &&
    bookName &&
    chapter &&
    reference &&
    href
  ) {
    const updateButton = () => {
      const bookmarked = isBookmarked(reference);

      button.textContent = bookmarked
        ? "✅ Bookmarked"
        : "📑 Bookmark";

      button.classList.toggle(
        "is-bookmarked",
        bookmarked
      );

      button.setAttribute(
        "aria-pressed",
        String(bookmarked)
      );
    };

    updateButton();

    button.addEventListener("click", () => {
      if (isBookmarked(reference)) {
        const bookmark = getBookmarks().find(
          (item) => item.reference === reference
        );

        if (bookmark) {
          removeBookmark(bookmark.id);
        }
      } else {
        addBookmark({
          id: crypto.randomUUID(),
          book,
          bookName,
          chapter: Number(chapter),
          reference,
          href,
          createdAt: new Date().toISOString(),
        });
      }

      updateButton();
    });
  }
}