import { api } from "../api";
import { AuthPayload } from "./types";

export const AuthService = {
  register: (authPayload: AuthPayload) => api.post('/register', authPayload),
  login: (authPayload: AuthPayload) => api.post('/login', authPayload),
}