import { addNote, getNote } from "../lib/notes";

interface NoteOpenDetail {
  book: string;
  bookName: string;
  chapter: number;
  verse: number;
}

const dialogEl = document.getElementById("note-dialog");
const referenceEl = document.getElementById("note-reference");
const textareaEl = document.getElementById("note-text");
const saveButtonEl = document.getElementById("save-note");
const cancelButtonEl = document.getElementById("cancel-note");

if (
  !(dialogEl instanceof HTMLDialogElement) ||
  !(referenceEl instanceof HTMLParagraphElement) ||
  !(textareaEl instanceof HTMLTextAreaElement) ||
  !(saveButtonEl instanceof HTMLButtonElement) ||
  !(cancelButtonEl instanceof HTMLButtonElement)
) {
  throw new Error("Note dialog elements were not found.");
}

// From this point onward these are strongly typed.
const dialog = dialogEl;
const reference = referenceEl;
const textarea = textareaEl;
const saveButton = saveButtonEl;
const cancelButton = cancelButtonEl;

let currentVerse: NoteOpenDetail | null = null;

function buildReference(data: NoteOpenDetail): string {
  return `${data.bookName} ${data.chapter}:${data.verse}`;
}

function buildHref(data: NoteOpenDetail): string {
  return `/bible/${data.book}/${data.chapter}#verse-${data.verse}`;
}

function resetDialog(): void {
  currentVerse = null;
  reference.textContent = "";
  textarea.value = "";
}

function closeDialog(): void {
  dialog.close();
  resetDialog();
}

document.addEventListener("bible:note-open", (event) => {
  const { detail } = event as CustomEvent<NoteOpenDetail>;

  currentVerse = detail;

  const ref = buildReference(detail);
  const existing = getNote(ref);

  reference.textContent = ref;
  textarea.value = existing?.text ?? "";

  dialog.showModal();
  textarea.focus();
});

saveButton.addEventListener("click", () => {
  if (!currentVerse) return;

  const ref = buildReference(currentVerse);
  const existing = getNote(ref);

  const now = new Date().toISOString();

  addNote({
    id: existing?.id ?? crypto.randomUUID(),

    book: currentVerse.book,
    bookName: currentVerse.bookName,

    chapter: currentVerse.chapter,
    verse: currentVerse.verse,

    reference: ref,
    href: buildHref(currentVerse),

    text: textarea.value.trim(),

    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  });

  closeDialog();
});

cancelButton.addEventListener("click", closeDialog);

dialog.addEventListener("cancel", resetDialog);

dialog.addEventListener("close", resetDialog);

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();

  const inside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!inside) {
    closeDialog();
  }
});