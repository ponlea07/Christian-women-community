const selectElement = document.getElementById("chapter-select");

if (selectElement instanceof HTMLSelectElement) {
  selectElement.addEventListener("change", () => {
    const book = selectElement.dataset.book;

    if (!book) return;

    window.location.href = `/bible/${book}/${selectElement.value}`;
  });
}