import React, { useState } from "react";
import { Container } from "./TextEditor.styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  color: string;
}

const TextEditor = ({ color, value, setValue }: TextEditorProps) => {
  return (
    <Container notecolor={color}>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </Container>
  );
};

export default TextEditor;
