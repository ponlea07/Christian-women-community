function showActions(verse: HTMLElement) {
  verse
    .querySelector<HTMLElement>(".verse-actions")
    ?.classList.add("is-visible");
}

function hideActions(verse: HTMLElement) {
  verse
    .querySelector<HTMLElement>(".verse-actions")
    ?.classList.remove("is-visible");
}

function buildReference(button: HTMLButtonElement) {
  return `${button.dataset.bookName} ${button.dataset.chapter}:${button.dataset.verse}`;
}

function buildVerseText(button: HTMLButtonElement) {
  return `${buildReference(button)}

${button.dataset.text}

World English Bible (WEB)`;
}

function openNote(button: HTMLButtonElement) {
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
}

async function copyVerse(button: HTMLButtonElement) {
  await navigator.clipboard.writeText(buildVerseText(button));
  console.log("Verse copied.");
}

async function shareVerse(button: HTMLButtonElement) {
  const text = buildVerseText(button);

  if (navigator.share) {
    await navigator.share({
      title: buildReference(button),
      text,
    });

    console.log("Verse shared.");
    return;
  }

  // Desktop fallback
  await navigator.clipboard.writeText(text);
  console.log("Sharing unavailable. Verse copied.");
}

function initializeVerseActions() {
  const verses = document.querySelectorAll<HTMLElement>(".verse");

  verses.forEach((verse) => {
    verse.addEventListener("mouseenter", () => showActions(verse));
    verse.addEventListener("mouseleave", () => hideActions(verse));

    verse.addEventListener("focusin", () => showActions(verse));
    verse.addEventListener("focusout", () => hideActions(verse));

    const buttons = verse.querySelectorAll<HTMLButtonElement>(".verse-action");

    buttons.forEach((button) => {
      button.addEventListener("click", async () => {
        const action = button.dataset.action;

        try {
          switch (action) {
            case "note":
              openNote(button);
              break;

            case "copy":
              await copyVerse(button);
              break;

            case "share":
              await shareVerse(button);
              break;

            default:
              console.warn(`Unknown verse action: ${action}`);
          }
        } catch (error) {
          console.error(`Failed to execute "${action}" action.`, error);
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