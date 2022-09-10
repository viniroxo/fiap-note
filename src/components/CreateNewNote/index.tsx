import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, IconButton} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {Add, Close, Save} from "@mui/icons-material";
import styled from "styled-components";
import {CreateNote} from "../../services/notes/types";
import {setEngine} from "crypto";

interface CreateNewNoteProps {
    createNote: (note: CreateNote) => void;
}

interface NoteTextareaProps {
    color: string;
    placeholderColor: string;
}

interface ActionButtonProps {
    iconColor: string;
}

const ActionButton = styled(IconButton)<ActionButtonProps>`
  color: ${props => props.iconColor} !important;
`

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

function CreateNewNote({createNote}: CreateNewNoteProps) {
    const [creating, setCreating] = useState(false);
    const [text, setText] = useState("");
    const [urgent, setUrgent] = useState(false);
    const theme = useTheme();

    const addCardNote = () => {
        return (
            <Card sx={{
                width: 250,
                height: 250,
                backgroundColor: theme.palette.primary.main + '40',
                margin: '5px',
                display: 'flex'
            }}
                  onClick={() => setCreating(true)}
            >
                <Add sx={{
                    fontSize: 100,
                    opacity: 0.25,
                    margin: 'auto',
                }}/>
            </Card>
        )
    }
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
                                  maxLength={140}
                                  onChange={(e) => setText(e.target.value)}
                    />
                </CardContent>
                <CardActions sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                    <ActionButton iconColor={theme.palette.primary.contrastText}
                                  onClick={() => {
                                      createNote({text, urgent})
                                      setCreating(!creating)
                                  }}>
                        <Save/>
                    </ActionButton>
                </CardActions>

            </Card>
        )
    }

    return (
        <>{creating ? createCardNote() : addCardNote()}</>

    );
}

CreateNewNote.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CreateNewNote;


