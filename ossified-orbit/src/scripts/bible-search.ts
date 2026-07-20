import { paginate } from "../lib/pagination";

interface SearchVerse {
  book: string;
  bookName: string;
  chapter: number;
  verse: number;
  reference: string;
  text: string;
  href: string;
}

const RESULTS_PER_PAGE = 10;

function getElement<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Element #${id} not found.`);
  }

  return element as T;
}

const form = getElement<HTMLFormElement>("search-form");
const input = getElement<HTMLInputElement>("search-input");
const results = getElement<HTMLDivElement>("results");
const resultsCount = getElement<HTMLParagraphElement>("results-count");

let bibleIndex: SearchVerse[] = [];
let currentMatches: SearchVerse[] = [];
let currentPage = 1;

async function loadBibleIndex(): Promise<void> {
  if (bibleIndex.length > 0) {
    return;
  }

  const response = await fetch("/data/bible/search-index.json");

  if (!response.ok) {
    throw new Error("Unable to load Bible search index.");
  }

  bibleIndex = (await response.json()) as SearchVerse[];
}

function render(matches: SearchVerse[]): void {
  results.innerHTML = "";

  if (matches.length === 0) {
    resultsCount.textContent = "No verses found.";
    return;
  }

  for (const verse of matches) {
    results.insertAdjacentHTML(
      "beforeend",
      `
      <article class="result-card">
        <h3>${verse.reference}</h3>

        <p>${verse.text}</p>

        <a href="${verse.href}">
          Read Chapter →
        </a>
      </article>
      `
    );
  }
}

function renderPage(): void {
  const page = paginate(
    currentMatches,
    currentPage,
    RESULTS_PER_PAGE
  );

  resultsCount.textContent =
    `Showing ${page.startItem}–${page.endItem} of ${page.totalItems} result${page.totalItems === 1 ? "" : "s"}`;

  render(page.items);
}

async function search(query: string): Promise<void> {
  const term = query.trim().toLowerCase();

  if (!term) {
    results.innerHTML = "";
    resultsCount.textContent = "";

    history.replaceState({}, "", "/bible/search");

    return;
  }

  resultsCount.textContent = "Searching...";

  await loadBibleIndex();

  currentMatches = bibleIndex.filter((verse) => {
    const searchable = [
      verse.bookName,
      verse.reference,
      verse.text,
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(term);
  });

  currentPage = 1;

  renderPage();

  history.replaceState(
    {},
    "",
    `/bible/search?q=${encodeURIComponent(query)}`
  );
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await search(input.value);
  } catch (error) {
    console.error(error);

    results.innerHTML = "";

    resultsCount.textContent =
      "Unable to search the Bible. Please try again.";
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);

  const query = params.get("q");

  if (!query) {
    return;
  }

  input.value = query;

  try {
    await search(query);
  } catch (error) {
    console.error(error);

    results.innerHTML = "";

    resultsCount.textContent =
      "Unable to search the Bible. Please try again.";
  }
});