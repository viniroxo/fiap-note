import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardActions, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Add, Close, PriorityHigh, Save } from "@mui/icons-material";
import { CreateNote } from "../../services/notes/types";
import { NoteTextarea } from "../NoteTextArea";
import { ActionButton } from "../ActionButton";

interface CreateNewNoteProps {
  createNote: (note: CreateNote) => void;
}

function CreateNewNote({ createNote }: CreateNewNoteProps) {
  const [creating, setCreating] = useState(false);
  const [text, setText] = useState("");
  const [urgent, setUrgent] = useState(false);
  const theme = useTheme();

  const addCardNote = () => {
    return (
      <Card sx={{
        width: 250,
        height: 250,
        backgroundColor: theme.palette.primary.main + "40",
        margin: "5px",
        display: "flex"
      }}
            onClick={() => setCreating(true)}
      >
        <Add sx={{
          fontSize: 100,
          opacity: 0.25,
          margin: "auto"
        }} />
      </Card>
    );
  };
  const createCardNote = () => {
    return (
      <Card sx={{
        width: 250,
        height: 250,
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "5px",
        position: "relative"
      }}>
        <Close sx={{
          position: "absolute",
          top: 5,
          right: 5,
          color: theme.palette.primary.contrastText
        }}
               onClick={() => setCreating(false)}
        />
        <CardContent>
          <NoteTextarea placeholderColor={theme.palette.primary.contrastText}
                        color={theme.palette.primary.contrastText}
                        placeholder={"Insira o texto da nota"}
                        autoFocus
                        maxLength={90}
                        onChange={(e) => setText(e.target.value)}
          />
        </CardContent>
        <CardActions sx={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <ActionButton iconColor={urgent ? theme.palette.error.main : theme.palette.primary.contrastText}
                        onClick={() => {
                          setUrgent(!urgent);
                        }}>
            <PriorityHigh />
          </ActionButton>
          <ActionButton iconColor={theme.palette.primary.contrastText}
                        onClick={() => {
                          createNote({ text, urgent });
                          setCreating(!creating);
                        }}>
            <Save />
          </ActionButton>
        </CardActions>

      </Card>
    );
  };

  return (
    <>{creating ? createCardNote() : addCardNote()}</>

  );
}

CreateNewNote.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CreateNewNote;


