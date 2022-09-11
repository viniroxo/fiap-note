import { api } from "../api";
import {Note, CreateNote, UpdateNote} from "./types";

export const NotesService = {
    getNotes: () => api.get<Note[]>('/notes'),
    createNote: (note: CreateNote) => api.post('/notes', note),
    deleteNote: (id: number) => api.delete(`/notes/${id}`),
    updateNote: (note: UpdateNote) => api.put(`/notes/${note.id}`, note),
}
