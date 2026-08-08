import {
  toggleHighlight,
  isHighlighted,
} from "../content/bible/verse-highlights";


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

function highlightVerse(button: HTMLButtonElement) {
  const highlighted = toggleHighlight({
    book: button.dataset.book!,
    bookName: button.dataset.bookName!,
    chapter: Number(button.dataset.chapter),
    verse: Number(button.dataset.verse),
    text: button.dataset.text ?? "",
  });

  updateVerseHighlight(button, highlighted);

  showHighlightMessage(
    highlighted
      ? "❤️ Verse highlighted."
      : "🗑️ Highlight removed."
  );
}
function updateVerseHighlight(
  button: HTMLButtonElement,
  highlighted: boolean
) {
  const verse = button.closest<HTMLElement>(".verse");

  if (!verse) return;

  verse.classList.toggle(
    "verse-highlighted",
    highlighted
  );
}

function showHighlightMessage(message: string) {
  const existing = document.querySelector(".highlight-toast");

  if (existing) {
    existing.remove();
  }

  const toast = document.createElement("div");

  toast.className = "highlight-toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  setTimeout(() => {
    toast.classList.remove("is-visible");

    setTimeout(() => {
      toast.remove();
    }, 250);
  }, 1800);
}

function initializeVerseActions() {
  const verses = document.querySelectorAll<HTMLElement>(".verse");

  verses.forEach((verse) => {
    // Show / hide actions
    verse.addEventListener("mouseenter", () => showActions(verse));
    verse.addEventListener("mouseleave", () => hideActions(verse));

    verse.addEventListener("focusin", () => showActions(verse));
    verse.addEventListener("focusout", () => hideActions(verse));

    // Restore saved highlight
    const highlighted = isHighlighted(
      verse.dataset.book!,
      Number(verse.dataset.chapter),
      Number(verse.dataset.verse)
    );

    verse.classList.toggle(
      "verse-highlighted",
      highlighted
    );

    // Wire up action buttons
    const buttons =
      verse.querySelectorAll<HTMLButtonElement>(".verse-action");

    buttons.forEach((button) => {
      button.addEventListener("click", async () => {
        const action = button.dataset.action;

        try {
          switch (action) {
            case "highlight":
              highlightVerse(button);
              break;

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
              console.warn(
                `Unknown verse action: ${action}`
              );
          }
        } catch (error) {
          console.error(
            `Failed to execute "${action}" action.`,
            error
          );
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
const toastStyles = document.createElement("style");

toastStyles.textContent = `
.highlight-toast{
  position:fixed;
  bottom:2rem;
  left:50%;
  transform:translateX(-50%) translateY(20px);

  background:#0F6B73;
  color:white;

  padding:.9rem 1.4rem;

  border-radius:999px;

  font-family:Poppins,sans-serif;

  font-size:.95rem;

  box-shadow:0 12px 30px rgba(0,0,0,.18);

  opacity:0;

  transition:all .25s ease;

  z-index:9999;
}

.highlight-toast.is-visible{
  opacity:1;
  transform:translateX(-50%) translateY(0);
}
`;

document.head.appendChild(toastStyles);