import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import styled from "styled-components";
import { Box, Button, Container, Paper, TextField as MuiTextField, Typography } from "@mui/material";
import NavigationBar from "../../components/NavigationBar";

const CenterLogin = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;
`;

const TextField = styled(MuiTextField)`
  margin: 8px 0 8px 0 !important;
`;

function Login() {
  const { handleLogin, authenticated } = useContext(Context);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (authenticated) navigate("/home");
  }, [authenticated]);

  return (
    <>
      <NavigationBar title={"FIAP-NOTE"} hasSearch={false} />
      <CenterLogin>
        <Container maxWidth="sm">
          <Box component="form">
            <Paper elevation={12} sx={{ padding: "40px" }}>
              <Typography variant="h4">Login</Typography>
              <TextField
                value={username}
                fullWidth
                id="username"
                label="Usuário"
                variant="standard"
                onChange={(e)=> setUsername(e.target.value)}
              />
              <TextField
                value={password}
                fullWidth id="password"
                label="Senha"
                variant="standard"
                type="password"
                onChange={(e)=> setPassword(e.target.value)}
              />
              <Button variant="contained" onClick={() => handleLogin({ username, password })}>Login</Button>
            </Paper>
          </Box>
        </Container>
      </CenterLogin>
    </>
  );
}

export default Login;
