import type { PaginationResult } from "./types";

interface RenderPaginationOptions {
  container: HTMLElement;
  pagination: PaginationResult<unknown>;
  onPageChange: (page: number) => void;
}

export function renderPagination({
  container,
  pagination,
  onPageChange,
}: RenderPaginationOptions): void {
  container.innerHTML = "";

  if (pagination.totalPages <= 1) {
    return;
  }

  const nav = document.createElement("nav");
  nav.className = "pagination-nav";
  nav.setAttribute("aria-label", "Pagination");

  const createButton = (
    label: string,
    page: number,
    disabled = false,
    active = false
  ): HTMLButtonElement => {
    const button = document.createElement("button");

    button.textContent = label;
    button.type = "button";

    if (active) {
      button.setAttribute("aria-current", "page");
      button.classList.add("active");
    }

    if (disabled) {
      button.disabled = true;
    } else {
      button.addEventListener("click", () => {
        onPageChange(page);
      });
    }

    return button;
  };

  nav.appendChild(
    createButton(
      "«",
      1,
      !pagination.hasPrevious
    )
  );

  nav.appendChild(
    createButton(
      "‹",
      pagination.currentPage - 1,
      !pagination.hasPrevious
    )
  );

  for (const item of pagination.visiblePages) {
    if (item === "...") {
      const span = document.createElement("span");
      span.textContent = "...";
      nav.appendChild(span);
      continue;
    }

    nav.appendChild(
      createButton(
        String(item),
        item,
        false,
        item === pagination.currentPage
      )
    );
  }

  nav.appendChild(
    createButton(
      "›",
      pagination.currentPage + 1,
      !pagination.hasNext
    )
  );

  nav.appendChild(
    createButton(
      "»",
      pagination.totalPages,
      !pagination.hasNext
    )
  );

  container.appendChild(nav);
}