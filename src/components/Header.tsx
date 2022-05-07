import { Typography, Box, Button } from "@mui/material";
import React from "react";

export const Header = () => {
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
        <Button size='large'>
          <Typography variant='h5'> שאלות ותשובות </Typography>
        </Button>
        <Button size='large'>
          <Typography variant='h5'> עמוד ראשי </Typography>
        </Button>
      </Box>
    </Box>
  );
};
