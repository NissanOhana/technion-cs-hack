import { Typography, Box, Button } from "@mui/material";
import React from "react";

/**
 * * We declare the component props! Interface & typing helps us develop faster, and saves us from runtime errors.
 */
interface HeaderProps {
  handleChangePage: (page: string) => void;
}

/**
 * Header component, have the HeaderProps interface.
 * we use disructturing of the props object:
 * props has the typeof HomePageProps, hence it contain { handleChangePage }.
 * read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
export const Header: React.FC<HeaderProps> = ({ handleChangePage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Typography variant='h3'>פוגש חבר 🤙</Typography>
      <Box sx={{ display: "flex" }}>
        <Button size='large' onClick={() => handleChangePage("faq")}>
          <Typography variant='h5'> שאלות ותשובות </Typography>
        </Button>
        <Button size='large' onClick={() => handleChangePage("home")}>
          <Typography variant='h5'> עמוד ראשי </Typography>
        </Button>
      </Box>
    </Box>
  );
};
