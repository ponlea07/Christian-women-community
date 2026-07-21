import {
  paginate,
  renderPagination,
} from "../lib/pagination";
import { rankByQuery } from "../lib/ranking";
import { highlightText } from "../lib/highlight";
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
const pagination = getElement<HTMLDivElement>("pagination");
let bibleIndex: SearchVerse[] = [];
let currentMatches: SearchVerse[] = [];
let currentPage = 1;
let currentSearchTerm = "";

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

function render(
  matches: SearchVerse[],
  searchTerm: string
): void {
  results.innerHTML = "";

  if (matches.length === 0) {
    resultsCount.textContent = "No verses found.";
    return;
  }

  for (const verse of matches) {
    const highlightedText = highlightText(
  verse.text,
  searchTerm,
  {
    wholeWord: true,
  }
);

    results.insertAdjacentHTML(
      "beforeend",
      `
      <article class="result-card">
        <h3>${verse.reference}</h3>

        <p>${highlightedText}</p>

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

  render(page.items, currentSearchTerm);

  renderPagination({
    container: pagination,
    pagination: page,
    onPageChange(pageNumber) {
      currentPage = pageNumber;
      renderPage();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  });
}
async function search(query: string): Promise<void> {
  currentSearchTerm = query.trim();

const term = currentSearchTerm.toLowerCase();
 if (!term) {
  currentSearchTerm = "";
  results.innerHTML = "";
  resultsCount.textContent = "";
  pagination.innerHTML = "";

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


const ranked = rankByQuery(
  currentMatches,
  currentSearchTerm,
  (verse) => ({
    reference: verse.reference,
    book: verse.bookName,
    text: verse.text,
  }),
  {
    wholeWord: true,
    weights: {
      reference: 200,
      book: 100,
      text: 40,
    },
  }
);


currentMatches = ranked.map((result) => result.item);
 
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