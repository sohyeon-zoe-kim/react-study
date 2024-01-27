import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/note";
import notes from "../../notesData";

interface NoteState {
  mainNotes: Note[];
  archiveNotes: Note[];
  trashNotes: Note[];
  editNote: null | Note;
}

const initialState: NoteState = {
  mainNotes: [...notes],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
};

enum noteType {
  mainNotes = "mainNotes",
  archiveNotes = "archiveNotes",
  trashNotes = "trashNotes",
}

const noteListSlice = createSlice({
  name: "noteList",
  initialState,
  reducers: {
    setMainNotes: (state, { payload }) => {
      // 해당 note 수정
      if (state.mainNotes.find(({ id }) => id === payload.id)) {
        state.mainNotes = state.mainNotes.map((note) =>
          note.id === payload.id ? payload : note
        );
        return;
      }
      // note를 새롭게 생성
      state.mainNotes.push(payload);
    },
    setTrashNotes: (state, { payload }) => {
      state.mainNotes = state.mainNotes.filter(({ id }) => id !== payload.id);
      state.archiveNotes = state.archiveNotes.filter(
        ({ id }) => id !== payload.id
      );
      state.trashNotes.push({ ...payload, isPinned: false });
    },
    setArchiveNote: (state, { payload }) => {
      state.mainNotes = state.mainNotes.filter(({ id }) => id !== payload.id);
      state.archiveNotes.push({ ...payload, isPinned: false });
    },
    unArchiveNote: (state, { payload }) => {
      state.archiveNotes = state.archiveNotes.filter(
        ({ id }) => id !== payload.id
      );
      state.mainNotes.push(payload);
    },
    restoreNote: (state, { payload }) => {
      state.trashNotes = state.trashNotes.filter(({ id }) => id !== payload.id);
      state.mainNotes.push(payload);
    },
    deleteNote: (state, { payload }) => {
      state.trashNotes = state.trashNotes.filter(({ id }) => id !== payload.id);
    },
    setPinnedNotes: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) =>
        note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
      );
    },
    setEditNote: (state, { payload }) => {
      state.editNote = payload;
    },
    readNote: (state, { payload }) => {
      const { type, id } = payload;
      const setRead = (notes: noteType) => {
        state[notes] = state[notes].map((note) =>
          note.id === id ? { ...note, isRead: !note.isRead } : note
        );
      };

      if (type === "archive") {
        setRead(noteType.archiveNotes);
        return;
      }

      if (type === "trash") {
        setRead(noteType.trashNotes);
        return;
      }

      setRead(noteType.mainNotes);
    },
    removeTags: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) => ({
        ...note,
        tags: note.tags.filter(({ tag }) => tag !== payload.tag),
      }));
    },
  },
});

export const {
  setMainNotes,
  setTrashNotes,
  setArchiveNote,
  unArchiveNote,
  restoreNote,
  deleteNote,
  setPinnedNotes,
  setEditNote,
  readNote,
  removeTags,
} = noteListSlice.actions;
export default noteListSlice.reducer;
