import React, {useState} from 'react';
import {Card, CardActions, CardContent, Typography, IconButton} from '@mui/material';
import {Close, Delete, Edit, PriorityHigh, Save} from '@mui/icons-material';
import {useTheme} from "@mui/material/styles";
import styled from "styled-components";
import {Note, UpdateNote} from "../../services/notes/types";
import dayjs from "dayjs";

interface ActionButtonProps {
    iconColor: string;
}

const ActionButton = styled(IconButton)<ActionButtonProps>`
  color: ${props => props.iconColor} !important;
`

interface CardNoteProps {
    note: Note,
    deleteNote: (id: number) => void;
    updateNote: (note: UpdateNote) => void;
}

interface NoteTextareaProps {
    color: string;
    placeholderColor: string;
}

const NoteTextarea = styled.textarea<NoteTextareaProps>`
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

function CardNote({note, deleteNote, updateNote}: CardNoteProps) {
    const theme = useTheme();
    const date = dayjs(note.date).format("DD/MM/YYYY HH:mm");

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(note.text);
    const [urgent, setUrgent] = useState(note.urgent);

    if (editing) {
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
                       onClick={() => setEditing(false)}
                />
                <CardContent>
                    <NoteTextarea placeholderColor={theme.palette.primary.contrastText}
                                  color={theme.palette.primary.contrastText}
                                  placeholder={"Insira o texto da nota"}
                                  autoFocus
                                  maxLength={90}
                                  onChange={(e) => setText(e.target.value)}
                                  value={text}
                    />
                </CardContent>
                <CardActions sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <ActionButton iconColor={urgent ? theme.palette.error.main : theme.palette.primary.contrastText}
                                  onClick={() => {
                                      setUrgent(!urgent)
                                  }}>
                        <PriorityHigh/>
                    </ActionButton>
                    <ActionButton iconColor={theme.palette.primary.contrastText}
                                  onClick={() => {
                                      updateNote({
                                          id: note.id,
                                          text,
                                          urgent
                                      })
                                      setEditing(!editing)
                                  }}>
                        <Save/>
                    </ActionButton>
                </CardActions>

            </Card>
        )
    } else {
        return (
            <Card sx={{
                width: 250,
                height: 250,
                backgroundColor: theme.palette.primary.main,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "5px",
            }}>
                <CardContent>
                    <Typography variant="body2" color={theme.palette.primary.contrastText}
                                sx={{fontWeight: "bold", fontSize: "1rem", wordBreak: "break-all"}}>
                        {note.text}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    {note.urgent ? (
                        <ActionButton iconColor={theme.palette.error.main}>
                            <PriorityHigh/>
                        </ActionButton>
                    ) : (
                        <div/>
                    )}
                    <div>
                        <ActionButton iconColor={theme.palette.primary.contrastText}
                                      onClick={() => deleteNote(note.id)}>
                            <Delete/>
                        </ActionButton>
                        <ActionButton iconColor={theme.palette.primary.contrastText}
                                      onClick={() => setEditing(!editing)}>
                            <Edit/>
                        </ActionButton>
                    </div>
                </CardActions>
            </Card>
        );
    }
}

export default CardNote;


