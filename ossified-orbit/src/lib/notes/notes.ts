import { getStorage, removeStorage, setStorage } from "../storage";
import type { Note } from "./types";

const NAMESPACE = "bible";
const KEY = "notes";

export function getNotes(): Note[] {
  return (
    getStorage<Note[]>(KEY, {
      namespace: NAMESPACE,
    }) ?? []
  );
}

export function getNote(reference: string): Note | undefined {
  return getNotes().find(
    (note) => note.reference === reference
  );
}

export function addNote(note: Note): void {
  const notes = getNotes();

  const existingIndex = notes.findIndex(
    (item) => item.reference === note.reference
  );

  if (existingIndex >= 0) {
    notes[existingIndex] = {
      ...notes[existingIndex],
      ...note,
      updatedAt: new Date().toISOString(),
    };
  } else {
    notes.unshift(note);
  }

  setStorage(KEY, notes, {
    namespace: NAMESPACE,
  });
}

export function removeNote(id: string): void {
  setStorage(
    KEY,
    getNotes().filter((note) => note.id !== id),
    {
      namespace: NAMESPACE,
    }
  );
}

export function clearNotes(): void {
  removeStorage(KEY, {
    namespace: NAMESPACE,
  });
}