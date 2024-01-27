import { RiInboxUnarchiveFill } from "react-icons/ri";
import { NotesIconBox } from "../styles/styles";
import { FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import { Note } from "../types/note";
import { Dispatch } from "@reduxjs/toolkit";
import { toggleCreateNoteModal } from "../store/modal/modalSlice";
import {
  deleteNote,
  restoreNote,
  setArchiveNote,
  setEditNote,
  setTrashNotes,
  unArchiveNote,
} from "../store/noteList/noteListSlice";

const getRelevantBtns = (type: string, note: Note, dispatch: Dispatch) => {
  const clickHandler = () => {
    dispatch(toggleCreateNoteModal(true));
    dispatch(setEditNote(note));
  };

  if (type === "archive") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(unArchiveNote(note))}
          data-info="Unarchive"
        >
          <RiInboxUnarchiveFill style={{ fontSize: "1rem" }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          data-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    );
  }

  if (type === "trash") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(restoreNote(note))}
          data-info="Restore"
        >
          <FaTrashRestore style={{ fontSize: "1rem" }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(deleteNote(note))}
          data-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    );
  }

  return (
    <>
      <NotesIconBox onClick={clickHandler} data-info="Edit">
        <FaEdit style={{ fontSize: "1rem" }} />
      </NotesIconBox>
      <NotesIconBox
        onClick={() => dispatch(setArchiveNote(note))}
        data-info="Archive"
      >
        <FaTrashRestore style={{ fontSize: "1rem" }} />
      </NotesIconBox>
      <NotesIconBox
        onClick={() => dispatch(setTrashNotes(note))}
        data-info="Delete"
      >
        <FaTrash />
      </NotesIconBox>
    </>
  );
};

export default getRelevantBtns;
