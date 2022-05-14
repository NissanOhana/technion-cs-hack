import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export interface LoginPageProps {
  loginHandler: () => void;
}
export const LoginPage: React.FC<LoginPageProps> = ({ loginHandler }) => {
  return (
    <Stack alignItems='center' spacing={5} sx={{ marginTop: "40px" }}>
      <Typography variant='h3'> בכל יום אתה פוגש חבר 🤙 </Typography>
      <Button onClick={loginHandler} variant='contained'>
        Login With Google
      </Button>
    </Stack>
  );
};
