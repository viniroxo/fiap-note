import styled from "styled-components";

interface NoteTextareaProps {
  color: string;
  placeholderColor: string;
}

export const NoteTextarea = styled.textarea<NoteTextareaProps>`
  width: 100%;
  height: 120px;
  resize: unset;
  border: 0;
  border-radius: 5px;
  outline: none;

  padding: 15px 0;

  background-color: transparent;
  font-size: 16px;
  color: ${props => props.color};

  ::placeholder {
    color: ${props => props.placeholderColor};
`