import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/note";

interface NoteState {
  mainNotes: Note[];
  archiveNotes: Note[];
  trashNotes: Note[];
  editNote: null | Note[];
}

const initialState: NoteState = {
  mainNotes: [],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
};

const noteListSlice = createSlice({
  name: "noteList",
  initialState,
  reducers: {
    removeTags: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) => ({
        ...note,
        tags: note.tags.filter(({ tag }) => tag !== payload.tag),
      }));
    },
  },
});

export const { removeTags } = noteListSlice.actions;
export default noteListSlice.reducer;
