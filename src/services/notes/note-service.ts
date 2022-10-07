import { apiAuth } from "../apiAuth";
import {Note, CreateNote, UpdateNote} from "./types";

export const NotesService = {
    getNotes: () => apiAuth.get<Note[]>('/notes'),
    createNote: (note: CreateNote) => apiAuth.post('/notes', note),
    deleteNote: (id: number) => apiAuth.delete(`/notes/${id}`),
    updateNote: (note: UpdateNote) => apiAuth.put(`/notes/${note.id}`, note),
}
