import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#778899",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#282c34",
    },
  },
});
export default theme;
