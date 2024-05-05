import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Adjust primary color
    },
    secondary: {
      main: '#f48fb1', // Adjust secondary color
    },
    background: {
      default: '#121212', // Adjust background color
      paper: '#1e1e1e', // Adjust paper color (like card backgrounds)
    },
    text: {
      primary: '#ffffff', // Adjust primary text color
      secondary: '#bdbdbd', // Adjust secondary text color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Adjust font family
    fontSize: 14, // Adjust base font size
  },
});

export default theme;
