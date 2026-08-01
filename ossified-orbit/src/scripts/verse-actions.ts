function showActions(verse: HTMLElement) {
  verse.querySelector<HTMLElement>(".verse-actions")
    ?.classList.add("is-visible");
}

function hideActions(verse: HTMLElement) {
  verse.querySelector<HTMLElement>(".verse-actions")
    ?.classList.remove("is-visible");
}

function initializeVerseActions() {
  const verses = document.querySelectorAll<HTMLElement>(".verse");

  verses.forEach((verse) => {
    verse.addEventListener("mouseenter", () => showActions(verse));
    verse.addEventListener("mouseleave", () => hideActions(verse));

    verse.addEventListener("focusin", () => showActions(verse));
    verse.addEventListener("focusout", () => hideActions(verse));

    const noteButton =
      verse.querySelector<HTMLButtonElement>(".verse-action");

    noteButton?.addEventListener("click", () => {
      document.dispatchEvent(
        new CustomEvent("bible:note-open", {
          detail: {
            book: noteButton.dataset.book!,
            bookName: noteButton.dataset.bookName!,
            chapter: Number(noteButton.dataset.chapter),
            verse: Number(noteButton.dataset.verse),
          },
        })
      );
    });
  });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeVerseActions);
} else {
  initializeVerseActions();
}