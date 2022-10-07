import React, {
  createContext,
  PropsWithChildren,
} from "react";

import useAuth from "./hooks/useAuth";

interface AuthContextTypes {
  loading: boolean;
  authenticated: boolean;
  handleLogin: (payload: any) => void;
  handleRegister: (payload: any) => void;
  handleLogout: () => void;
}

const Context = createContext<AuthContextTypes>({} as AuthContextTypes);

function AuthProvider({ children }: PropsWithChildren) {
  const { authenticated, loading, handleLogin, handleLogout, handleRegister } = useAuth();

  return (
    <Context.Provider
      value={{ loading, authenticated, handleLogin, handleLogout, handleRegister }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
