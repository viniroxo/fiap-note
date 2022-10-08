import { apiAuth } from "../apiAuth";
import {Note, CreateNote, UpdateNote} from "./types";

export const NotesService = {
    getNotes: () => apiAuth.get<Note[]>('/fiap-notes'),
    createNote: (note: CreateNote) => apiAuth.post('/fiap-notes', note),
    deleteNote: (id: number) => apiAuth.delete(`/fiap-notes/${id}`),
    updateNote: (note: UpdateNote) => apiAuth.put(`/fiap-notes/${note.id}`, note),
}
