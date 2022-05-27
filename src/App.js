import Navbar from "./components/Navbar";
import { UserPanel } from "./components/UserPanel";
import { createTheme, ThemeProvider } from '@mui/material/styles';

let lightTheme = createTheme({
  palette: {
    primary: {
      main: '#A259FF',
      light: '#fff'
    },
    secondary: {
      main: '#E16259',
      light: '#fff'
    },
    text: {
      select: 'rgb(255, 255, 255)'
    },
  }
});

let darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Navbar />
      <UserPanel />
    </ThemeProvider>
  );
}

export default App;
