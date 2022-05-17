import { Container } from "@mui/material";
import { useState } from "react";
import { ErrorPage } from "./ErrorPage";
import { FAQPage } from "./FAQPage";
import { Header } from "./Header";
import { HomePage } from "./HomePage/HomePage";

interface UserAppProps {
  user: any;
}
export const UserApp: React.FC<UserAppProps> = ({ user }) => {
  /**
   * The useMemo hook - https://reactjs.org/docs/hooks-reference.html#usememo
   * For performance optimizations. We don't want to call the getAppTheme each time, because
   * the result is the same (the theme isn't change...). useMemo helps us with that, and "remember" the value.
   */

  const [page, setPage] = useState("home");

  const handleChangePage = (page: string) => {
    setPage(page);
  };


  // Check how we case pass props: values or even functions! :)
  return (
    <Container maxWidth='lg' sx={{ textAlign: "center", margin: "20px" }}>
      <Header handleChangePage={handleChangePage} userCredential={user} />
      {page === "home" ? (
        <HomePage displayName={user?.user?.displayName ?? ''} />
      ) : page === "faq" ? (
        <FAQPage />
      ) : (
        <ErrorPage />
      )}
    </Container>
  );
};
