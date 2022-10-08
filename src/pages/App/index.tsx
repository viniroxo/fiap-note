import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import NavigationBar from "../../components/NavigationBar";
import CardNote from "../../components/CardNote";
import { useTheme } from "@mui/material/styles";
import { CreateNote, Note, UpdateNote } from "../../services/notes/types";
import { NotesService } from "../../services/notes/note-service";
import CreateNewNote from "../../components/CreateNewNote";
import { CircularProgress, Fab } from "@mui/material";
import { Logout, PriorityHigh } from "@mui/icons-material";
import { AppContainer } from "../../components/AppContainer";
import { Context } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: row wrap;
`;

function App() {
  const { handleLogout, authenticated } = useContext(Context);
  const navigate = useNavigate();

  const theme = useTheme();
  const [notes, setNotes] = useState<Note[]>([] as Note[]);
  const [urgent, setUrgent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!authenticated) navigate("/fiap-note");
  }, [authenticated]);

  const getNotes = () => {
    setLoading(true);
    NotesService.getNotes().then((response) => {
      setNotes(response.data);
      setLoading(false);
    });
  };
  const createNote = (note: CreateNote) => {
    NotesService.createNote(note).then(r => {
      setNotes([...notes, r.data]);
    });
  };
  const deleteNote = (id: number) => {
    NotesService.deleteNote(id).then(() => {
      setNotes((prevState) => prevState.filter((note) => note.id !== id));
    });
  };
  const updateNote = (note: UpdateNote) => {
    NotesService.updateNote(note).then(() => {
      getNotes();
    });
  };

  const filterNotes = (text: string, urgent: boolean) => {
    let notesList = notes.filter((note) => note.text.toLowerCase().includes(text.toLowerCase()));

    if (urgent) {
      notesList = notesList.filter(note => note.urgent);
    }

    return notesList
      .sort((a, b) => Number(b.urgent) - Number(a.urgent))
      .map((note) => {
        return <CardNote key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote} />;
      });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <AppContainer>
      <NavigationBar title={"FIAP-NOTE"} hasSearch text={text} onChange={(text: string) => {
        setText(text);
      }} />
      {loading ? (
        <CircularProgress size={80} sx={{
          position: "absolute",
          top: "50%",
          left: "50%"
        }} />
      ) : (
        <>
          <CardContainer>
            {filterNotes(text, urgent)}
            <CreateNewNote key={notes.length + 1} createNote={createNote} onClick={function(...args: any[]) {
              throw new Error("Function not implemented.");
            }} />
          </CardContainer>
          <Fab color="primary" sx={{ position: "absolute", bottom: 16, left: 16 }}
               onClick={() => setUrgent(!urgent)}>
            <PriorityHigh color={urgent ? "error" : "inherit"} />
          </Fab>
          <Fab color="primary" sx={{ position: "absolute", bottom: 16, right: 16 }}
               onClick={() => handleLogout()}>
            <Logout />
          </Fab>
        </>
      )}

    </AppContainer>
  );
}

export default App;
