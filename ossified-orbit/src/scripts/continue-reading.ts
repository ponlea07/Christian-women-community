import { getReadingProgress } from "../lib/reading";

const container = document.getElementById("continue-reading");
const heading = document.getElementById("continue-reference");
const anchor = document.getElementById("continue-link");

if (
  container instanceof HTMLElement &&
  heading instanceof HTMLHeadingElement &&
  anchor instanceof HTMLAnchorElement
) {
  const reading = getReadingProgress();

  if (reading) {
    heading.textContent = `${reading.bookName} ${reading.chapter}`;
    anchor.href = reading.href;
    container.classList.remove("hidden");
  }
}