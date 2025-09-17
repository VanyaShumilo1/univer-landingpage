import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "dayjs/locale/uk";
import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Games from "./components/Games";
import Header from "./components/Header";
import Location from "./components/Location";
import Pricing from "./components/Pricing";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
        <Box>
          <Header />
          <About />
          <Games />
          <Gallery />
          <Booking />
          <Pricing />
          <Location />
          <Contact />
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
