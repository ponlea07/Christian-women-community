import {
  getNotePreview,
  getNotes,
  removeNote,
  sortNotes,
} from "../lib/notes";

const rootElement = document.getElementById("notes-root");

if (!(rootElement instanceof HTMLDivElement)) {
  throw new Error("Notes root element not found.");
}

const root = rootElement;

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString();
}

function renderEmptyState(): void {
  root.innerHTML = `
    <div class="notes-empty">
      <h2>No notes yet</h2>

      <p>
        As you read Scripture, click the note icon beside a verse to
        save your thoughts.
      </p>
    </div>
  `;
}

function renderNotes(): void {
  const notes = sortNotes(getNotes());

  if (notes.length === 0) {
    renderEmptyState();
    return;
  }

  root.innerHTML = `
    <div class="notes-list">
      ${notes
        .map(
          (note) => `
            <article class="note-card">

              <header class="note-card__header">
                <h2>${note.reference}</h2>

                <span class="note-card__date">
                  Updated ${formatDate(note.updatedAt)}
                </span>
              </header>

              <p class="note-card__preview">
                ${getNotePreview(note.text)}
              </p>

              <footer class="note-card__actions">

                <a
                  href="${note.href}"
                  class="note-button note-button--primary"
                >
                  Open Verse
                </a>

                <button
                  class="note-button note-button--secondary"
                  data-note-id="${note.id}"
                >
                  Delete
                </button>

              </footer>

            </article>
          `
        )
        .join("")}
    </div>
  `;

  root
    .querySelectorAll<HTMLButtonElement>("[data-note-id]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.noteId;

        if (!id) return;

        removeNote(id);

        renderNotes();
      });
    });
}

renderNotes();