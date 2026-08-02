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

    const buttons =
      verse.querySelectorAll<HTMLButtonElement>(".verse-action");

    buttons.forEach((button) => {
      button.addEventListener("click", async () => {
        const action = button.dataset.action;

        switch (action) {
          case "note":
            document.dispatchEvent(
              new CustomEvent("bible:note-open", {
                detail: {
                  book: button.dataset.book!,
                  bookName: button.dataset.bookName!,
                  chapter: Number(button.dataset.chapter),
                  verse: Number(button.dataset.verse),
                },
              })
            );
            break;

          case "copy": {
            const reference =
              `${button.dataset.bookName} ${button.dataset.chapter}:${button.dataset.verse}`;

            const text =
              `${reference}\n\n${button.dataset.text}\n\nWorld English Bible (WEB)`;

            try {
              await navigator.clipboard.writeText(text);

              console.log("Verse copied.");
            } catch (error) {
              console.error("Unable to copy verse.", error);
            }

            break;
          }
        }
      });
    });
  });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeVerseActions);
} else {
  initializeVerseActions();
}