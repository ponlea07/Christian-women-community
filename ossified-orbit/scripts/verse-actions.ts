document.addEventListener("DOMContentLoaded", () => {
  const verses = document.querySelectorAll<HTMLElement>(".verse");

  verses.forEach((verse) => {
    const actions = verse.querySelector<HTMLElement>(".verse-actions");

    if (!actions) return;

    verse.addEventListener("mouseenter", () => {
      actions.classList.add("is-visible");
    });

    verse.addEventListener("mouseleave", () => {
      actions.classList.remove("is-visible");
    });

    verse.addEventListener("focusin", () => {
      actions.classList.add("is-visible");
    });

    verse.addEventListener("focusout", () => {
      actions.classList.remove("is-visible");
    });
  });
});