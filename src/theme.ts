import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ffff", // Яскраво-неоновий голубий
      light: "#66ffff",
      dark: "#00cccc",
      contrastText: "#000000",
    },
    secondary: {
      main: "#f5f5f5", // Білий
      light: "#ffffff",
      dark: "#c2c2c2",
      contrastText: "#000000",
    },
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
    grey: {
      800: "#1e1e1e",
      900: "#121212",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
          padding: "12px 24px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            color: "#000000",
            boxShadow: "0 4px 12px rgba(0, 255, 255, 0.3)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        },
      },
    },
  },
});

export default theme;
