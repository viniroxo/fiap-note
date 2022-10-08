import { api } from "../api";
import { AuthPayload } from "./types";

export const AuthService = {
  register: (authPayload: AuthPayload) => api.post('/users', authPayload),
  login: (authPayload: AuthPayload) => api.post('/users/login', authPayload),
}