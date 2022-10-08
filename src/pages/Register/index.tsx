import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import { Box, Button, Container, Paper, TextField as MuiTextField, Typography } from "@mui/material";
import styled from "styled-components";
import NavigationBar from "../../components/NavigationBar";
import AuthForm from "../../components/AuthForm";

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

  useEffect(() => {
    if (authenticated) navigate("/fiap-note/home");
  }, [authenticated]);

  return (
    <>
      <NavigationBar title={"FIAP-NOTE"} hasSearch={false} />
      <AuthForm title={"Cadastrar"} ButtonText={"Cadastrar"} handleSubmit={handleRegister}/>
    </>
  );
}

export default Register;
