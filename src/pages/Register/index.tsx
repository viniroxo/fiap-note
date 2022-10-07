import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import { Box, Button, Container, Paper, TextField as MuiTextField, Typography } from "@mui/material";
import styled from "styled-components";
import NavigationBar from "../../components/NavigationBar";

const CenterRegister = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;
`;

const TextField = styled(MuiTextField)`
  margin: 8px 0 8px 0 !important;
`;

function Register() {
  const { handleRegister, authenticated } = useContext(Context);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (authenticated) navigate("/home");
  }, [authenticated]);

  return (
    <>
      <NavigationBar title={"FIAP-NOTE"} hasSearch={false} />
      <CenterRegister>
        <Container maxWidth="sm">
          <Box component="form">
            <Paper elevation={12} sx={{ padding: "40px" }}>
              <Typography variant="h4">Cadastro</Typography>
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
              <Button variant="contained" onClick={() => handleRegister({ username, password })}>Login</Button>
            </Paper>
          </Box>
        </Container>
      </CenterRegister>
    </>
  );
}

export default Register;
