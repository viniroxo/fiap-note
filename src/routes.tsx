import { useContext } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Context } from "./Context/AuthContext";
import App from "./pages/App";
import Login from "./pages/Login";
import Register from "./pages/Register";

interface PrivateRouteProps {
  authenticated: boolean;
}

function PrivateRoute({ authenticated }: PrivateRouteProps) {
  if (!authenticated) return <Navigate to="/fiap-note" replace />;

  return <Outlet />;
}

function AppRoutes() {
  const { authenticated } = useContext(Context);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fiap-note/" element={<Login />} />
        <Route element={<PrivateRoute authenticated={authenticated} />}>
          <Route path="/fiap-note/home" element={<App />} />
        </Route>
        <Route path="/fiap-note/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
