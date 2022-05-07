import { createTheme, responsiveFontSizes } from "@mui/material";

export const getAppTheme = () => {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#00ADB5",
      },
      secondary: {
        main: "#393E46",
      },
    },
    typography: {
      fontFamily: "Assistant",
    },
    direction: "rtl",
  });
  theme = responsiveFontSizes(theme);
  return theme;
};
