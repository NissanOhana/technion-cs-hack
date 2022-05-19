import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export interface LoginPageProps {
  loginHandler: () => void;
}
export const LoginPage: React.FC<LoginPageProps> = ({ loginHandler}) => {
  return (
    <Stack alignItems='center' spacing={5} sx={{ marginTop: "40px" }}>
      <Typography variant='h3'> היכנס כאן :) </Typography>
      <Button onClick={loginHandler} variant='contained'>
        Login With Email
      </Button>
    </Stack>
  );
};
