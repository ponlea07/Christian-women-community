const openBtn = document.getElementById("openJoinModal");
const closeBtn = document.getElementById("closeJoinModal");
const modal = document.getElementById("joinModal");
let previouslyFocusedElement = null;

const closeModal = () => {
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "";

  if (previouslyFocusedElement instanceof HTMLElement) {
    previouslyFocusedElement.focus();
  }
};

if (openBtn && modal) {

  openBtn.addEventListener("click", () => {
    previouslyFocusedElement = document.activeElement;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  });

}

if (closeBtn && modal) {

  closeBtn.addEventListener("click", () => {
    closeModal();
  });

}

// Close when clicking outside the card
if (modal) {

  modal.addEventListener("click", (e) => {

    if (e.target === modal) {

      closeModal();

    }

  });

}

// Close with Escape key
document.addEventListener("keydown", (e) => {

  if (e.key === "Escape" && modal?.classList.contains("active")) {

    closeModal();

  }

});
