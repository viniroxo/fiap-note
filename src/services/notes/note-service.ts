import { api } from "../api";
import { Note, CreateNote } from "./types";

export const NotesService = {
    getNotes: () => api.get<Note[]>('/notes'),
    createNotes: (note: CreateNote) => api.post('/notes', note),
    deleteNote: (id: number) => api.delete(`/notes/${id}`)
}