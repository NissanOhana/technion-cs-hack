import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import React, { useState, useMemo } from "react";
import { getAppTheme } from "../theme";
import { Header } from "./Header";

function App() {
  /**
   * The useMemo hook - https://reactjs.org/docs/hooks-reference.html#usememo
   * For performance optimizations. We don't want to call the getAppTheme each time, because
   * the result is the same (the theme isn't change...). useMemo helps us with that, and "remember" the value.
   */

  const theme = useMemo(() => getAppTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md' sx={{ textAlign: "center" }}>
        <Header />
        <Typography> היי עולם </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
