import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import NavigationBar from "../../components/NavigationBar";
import CardNote from "../../components/CardNote";
import {useTheme} from '@mui/material/styles';
import {Note} from "../../services/notes/types";
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
  height: 100vh;
`

function App() {
    const theme = useTheme();
    const [notes, setNotes] = useState<Note[]>([] as Note[]);

    useEffect(() => {
        NotesService.getNotes().then((response) => {
            setNotes(response.data);
        });
    }, []);

    return (
        <AppContainer background={theme.palette.secondary.main}>
            <NavigationBar title={"FIAP-NOTE"}/>
            <CardContainer>
                {notes.map((note) => {
                    return <CardNote key={note.id} description={note.text}/>
                })}
                <CreateNewNote key={notes.length + 1} onClick={()=>{
                    console.log("nova nota");
                    const newNote = {id: notes.length + 1, text: 'Estudar hooks ReactJS', date: new Date(), urgent: false}
                    setNotes([...notes, newNote])
                }}/>
            </CardContainer>
        </AppContainer>
    );
}

export default App;
