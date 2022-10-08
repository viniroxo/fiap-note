import axios, { AxiosError, AxiosResponse } from "axios";
import { useState, useEffect } from "react";

import { AuthService } from "../../services/auth/auth-service";
import { AuthPayload } from "../../services/auth/types";

interface ErrorResponse extends AxiosError {
  response: AxiosResponse<{ erro: string }>;
}

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(payload: AuthPayload) {
    try {
      setLoading(true);
      const {
        data: { token }
      } = await AuthService.login(payload);

      localStorage.setItem("token", token);
      setAuthenticated(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as ErrorResponse;
        alert(err.response?.data.erro);
      } else {
        alert("Erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(payload: AuthPayload) {
    try {
      setLoading(true);

      await AuthService.register(payload);
      window.location.href = "/fiap-note"
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as ErrorResponse;
        alert(err.response?.data.erro);
      } else {
        alert("Erro insesperado");
      }
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
  }

  return { authenticated, loading, handleLogin, handleLogout, handleRegister };
}
