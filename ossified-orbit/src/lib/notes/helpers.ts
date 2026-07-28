import type { Note } from "./types";

export function sortNotes(notes: Note[]): Note[] {
  return [...notes].sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() -
      new Date(a.updatedAt).getTime()
  );
}

export function getNotePreview(
  text: string,
  length = 120
): string {
  const trimmed = text.trim();

  if (trimmed.length <= length) {
    return trimmed;
  }

  return `${trimmed.slice(0, length)}…`;
}