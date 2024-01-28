import React, { useState } from "react";
import { useAppDisPatch, useAppSelector } from "../../../hooks/redux";
import { DeleteBox, FixedContainer } from "../Modal.styles";
import {
  AddedTagsBox,
  Box,
  OptionsBox,
  StyledInput,
  TopBox,
} from "./CreateNoteModal.styles";
import {
  toggleCreateNoteModal,
  toggleTagsModal,
} from "../../../store/modal/modalSlice";
import { setEditNote } from "../../../store/noteList/noteListSlice";
import { ButtonFill, ButtonOutline } from "../../../styles/styles";
import { FaPlus, FaTimes } from "react-icons/fa";
import { v4 } from "uuid";
import TagsModal from "../TagsModal/TagsModal";

const CreateNoteModal = () => {
  const dispatch = useAppDisPatch();
  const { editNote } = useAppSelector((state) => state.noteList);
  const { viewAddTagsModal } = useAppSelector((state) => state.modal);
  const [noteTitle, setNoteTitle] = useState(editNote?.title || "");
  const [content, setContent] = useState(editNote?.content || "");
  const [addedTags, setAddedTags] = useState(editNote?.tags || []);
  const [noteColor, setNoteColor] = useState(editNote?.color || "");
  const [priority, setPriority] = useState(editNote?.priority || "row");

  const closeCreateNoteModal = () => {
    dispatch(toggleCreateNoteModal(false));
    dispatch(setEditNote(null));
  };

  const tagsHandler = (tag: string, type: string) => {
    const newTag = tag.toLocaleLowerCase();
    if (type === "add") {
      setAddedTags((prev) => [...prev, { tag: newTag, id: v4() }]);
      return;
    }

    setAddedTags(addedTags.filter(({ tag }) => tag !== newTag));
  };

  return (
    <FixedContainer>
      {viewAddTagsModal && (
        <TagsModal type="add" addedTags={addedTags} handleTags={tagsHandler} />
      )}
      <Box>
        <TopBox>
          <div className="createNote__title">노트 생성하기</div>
          <DeleteBox
            className="createNote__close-btn"
            onClick={closeCreateNoteModal}
          ></DeleteBox>
        </TopBox>
        <StyledInput
          type="text"
          value={noteTitle}
          name="title"
          placeholder="제목..."
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <div className="createNote__create-btn">
          <ButtonFill>
            {editNote ? (
              <span>저장하기</span>
            ) : (
              <>
                <FaPlus />
                <span>생성하기</span>
              </>
            )}
          </ButtonFill>
        </div>
        <AddedTagsBox>
          {addedTags.map(({ tag, id }) => (
            <div key={id}>
              <span className="createNote__tag">{tag}</span>
              <span
                className="createNote__tag-remove"
                onClick={() => tagsHandler(tag, "remove")}
              >
                <FaTimes />
              </span>
            </div>
          ))}
        </AddedTagsBox>
        <OptionsBox>
          <ButtonOutline
            onClick={() =>
              dispatch(toggleTagsModal({ type: "add", view: true }))
            }
          >
            Add Tag
          </ButtonOutline>
          <div>
            <label htmlFor="color">배경색 : </label>
            <select
              value={noteColor}
              id="color"
              onChange={(e) => setNoteColor(e.target.value)}
            >
              <option value="">White</option>
              <option value="ffcccc">Red</option>
              <option value="ccffcc">Green</option>
              <option value="cce0ff">Blue</option>
              <option value="ffffcc">Yellow</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority">우선순위 : </label>
            <select
              value={priority}
              id="priority"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </OptionsBox>
      </Box>
    </FixedContainer>
  );
};

export default CreateNoteModal;
