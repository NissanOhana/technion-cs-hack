import { Container, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { getAppTheme } from "../theme";
import { ErrorPage } from "./ErrorPage";
import { FAQPage } from "./FAQPage";
import { Header } from "./Header";
import { HomePage } from "./HomePage";

function App() {
  /**
   * The useMemo hook - https://reactjs.org/docs/hooks-reference.html#usememo
   * For performance optimizations. We don't want to call the getAppTheme each time, because
   * the result is the same (the theme isn't change...). useMemo helps us with that, and "remember" the value.
   */

  const theme = useMemo(() => getAppTheme(), []);

  const [page, setPage] = useState("home");

  const handleChangePage = (page: string) => {
    setPage(page);
  };

  // Check how we case pass props: values or even functions! :)
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md' sx={{ textAlign: "center" }}>
        <Header handleChangePage={handleChangePage} />
        {page === "home" ? (
          <HomePage />
        ) : page === "faq" ? (
          <FAQPage />
        ) : (
          <ErrorPage />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
