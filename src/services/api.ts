import axios from "axios";

export const api = axios.create({
    baseURL: `https://fiap-notes.herokuapp.com`,
});