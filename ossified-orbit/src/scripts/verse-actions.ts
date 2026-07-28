function showActions(verse: HTMLElement): void {
  const actions = verse.querySelector<HTMLElement>(".verse-actions");

  if (!actions) return;

  actions.classList.add("is-visible");
}

function hideActions(verse: HTMLElement): void {
  const actions = verse.querySelector<HTMLElement>(".verse-actions");

  if (!actions) return;

  actions.classList.remove("is-visible");
}

function initializeVerseActions(): void {
  const verses = document.querySelectorAll<HTMLElement>(".verse");

  verses.forEach((verse) => {
    // Desktop
    verse.addEventListener("mouseenter", () => {
      showActions(verse);
    });

    verse.addEventListener("mouseleave", () => {
      hideActions(verse);
    });

    // Keyboard accessibility
    verse.addEventListener("focusin", () => {
      showActions(verse);
    });

    verse.addEventListener("focusout", () => {
      hideActions(verse);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeVerseActions);
} else {
  initializeVerseActions();
}