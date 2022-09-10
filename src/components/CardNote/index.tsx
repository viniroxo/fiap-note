import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, Typography, IconButton} from '@mui/material';
import {Delete, Edit} from '@mui/icons-material';
import {useTheme} from "@mui/material/styles";
import styled from "styled-components";
import {CreateNote, Note} from "../../services/notes/types";

interface ActionButtonProps {
    iconColor: string;
}

const ActionButton = styled(IconButton)<ActionButtonProps>`
  color: ${props => props.iconColor} !important;
`

interface CardNoteProps {
    note: Note,
    deleteNote: (id: number) => void;
}

function CardNote({note, deleteNote}: CardNoteProps) {
    const theme = useTheme();
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
                <Typography variant="body2"
                            color={theme.palette.primary.contrastText}
                            sx={{fontWeight: "bold", fontSize: "1.2rem"}}
                >
                    {note.text}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: "flex",
                justifyContent: "flex-end",
            }}>
                <ActionButton iconColor={theme.palette.primary.contrastText} onClick={()=> deleteNote(note.id)}>
                    <Delete/>
                </ActionButton>
                <ActionButton iconColor={theme.palette.primary.contrastText}>
                    <Edit/>
                </ActionButton>
            </CardActions>
        </Card>
    );
}

export default CardNote;


