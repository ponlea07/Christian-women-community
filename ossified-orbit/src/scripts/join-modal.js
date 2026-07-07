const openBtn = document.getElementById("openJoinModal");
const closeBtn = document.getElementById("closeJoinModal");
const modal = document.getElementById("joinModal");

if (openBtn && modal) {

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

}

if (closeBtn && modal) {

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  });

}

// Close when clicking outside the card
if (modal) {

  modal.addEventListener("click", (e) => {

    if (e.target === modal) {

      modal.classList.remove("active");
      document.body.style.overflow = "";

    }

  });

}

// Close with Escape key
document.addEventListener("keydown", (e) => {

  if (e.key === "Escape" && modal) {

    modal.classList.remove("active");
    document.body.style.overflow = "";

  }

});