import React, { useState } from "react";
import styled from "styled-components";
import { Box, Button as MuiButton, Container, Paper, TextField as MuiTextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CenterLogin = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;
`;

const TextField = styled(MuiTextField)`
  margin: 8px 0 8px 0 !important;
`;

const Button = styled(MuiButton)`
  margin: 8px 0 8px 0 !important;
`;

const RegisterLink = styled(Typography)`
  margin: 8px 0 8px 0 !important;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
;
`;

interface AuthForm {
  title: string;
  ButtonText: string;
  isLogin?: boolean;
  handleSubmit: (payload: any) => void;
}

function AuthForm({ title, ButtonText, isLogin, handleSubmit }: AuthForm) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <CenterLogin>
      <Container maxWidth="sm">
        <Box component="form">
          <Paper elevation={12} sx={{ padding: "40px" }}>
            <Typography
              sx={{ margin: "8px 0 8px 0" }}
              variant="h4"
            >
              {title}
            </Typography>
            <TextField
              value={username}
              fullWidth
              id="username"
              label="Usuário"
              variant="standard"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              value={password}
              fullWidth
              id="password"
              label="Senha"
              variant="standard"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {isLogin && (
              <RegisterLink
                align="right"
                sx={{ margin: "8px 0 8px 0" }}
                variant="body2"
                onClick={() => navigate("/fiap-note/register")}
              >
                não tenho uma conta
              </RegisterLink>
            )}
            <Button
              fullWidth
              variant="contained"
              onClick={() => handleSubmit({ username, password })}
            >
              {ButtonText}
            </Button>
          </Paper>
        </Box>
      </Container>
    </CenterLogin>
  );
}

export default AuthForm;
