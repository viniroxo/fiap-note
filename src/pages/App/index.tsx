import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import NavigationBar from "../../components/NavigationBar";
import CardNote from "../../components/CardNote";
import {useTheme} from '@mui/material/styles';
import {CreateNote, Note, UpdateNote} from "../../services/notes/types";
import {NotesService} from "../../services/notes/note-service";
import CreateNewNote from "../../components/CreateNewNote";

const CardContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: row wrap;
`

interface AppContainerProps {
    background: string;
}

const AppContainer = styled.div<AppContainerProps>`
  background-color: ${props => props.background};
  height: 100%;
`

function App() {
    const theme = useTheme();
    const [notes, setNotes] = useState<Note[]>([] as Note[]);
    const [text, setText] = useState("");

    const getNotes = () => {
        NotesService.getNotes().then((response) => {
            setNotes(response.data);
        });
    }

    const createNote = (note: CreateNote) => {
        NotesService.createNote(note).then(r => {
            setNotes([...notes, r.data]);
        })
    }

    const deleteNote = (id: number) => {
        NotesService.deleteNote(id).then(() => {
            setNotes((prevState) => prevState.filter((note) => note.id !== id));
        })
    }

    const updateNote = (note: UpdateNote) => {
        NotesService.updateNote(note).then(() => {
            getNotes();
        })
    }

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <AppContainer background={theme.palette.secondary.main}>
            <NavigationBar title={"FIAP-NOTE"} text={text} onChange={(text: string) => {
                setText(text);
            }}/>
            <CardContainer>
                {notes
                    .sort((a, b) => Number(b.urgent) - Number(a.urgent))
                    .filter((note) => note.text.includes(text))
                    .map((note) => {
                        return <CardNote key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote}/>
                    })}
                <CreateNewNote key={notes.length + 1} createNote={createNote} onClick={function (...args: any[]) {
                    throw new Error('Function not implemented.');
                }}/>
            </CardContainer>
        </AppContainer>
    );
}

export default App;
