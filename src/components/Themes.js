import { createTheme } from '@mui/material/styles';


const baseTheme = createTheme({
  typography: {
    h4: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 500,
      fontSize: 38,
    },
    body1: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: 20,
    },
    h3: {
      paddingBottom: '10px',
      borderColor: '#403f3e',
      borderStyle: 'solid',
      borderWidth: '0px 0px 2px 0px',
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 500,
      fontSize: 38,
      width: '100%',
    }
  },
});

const darkTheme = createTheme({
  ...baseTheme, 
  palette: {
    primary: {
        main: '#9171f8',
        on: '#0D0D0D'
    },
    secondary: {
        main: '#9171f8'
    },
    background: {
        main: '#1F1F1F',
        on: '#F2F2F2',
        ons: '#403f3e', // underline gray color
        onlink: '#9098FD', // light blue link color
    },
  },
  typography: {
    ...baseTheme.typography, 
  },
  mode: 'dark'
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
        main: '#244ABC',
        on: '#FFFFFF'
    },
    secondary: {
        main: '#244ABC',
    },
    background: {
        main: '#FFFFFF',
        on: '#121212',
        ons: '#666565',
        onlink: '#0D1BE3',
    },
  },
  typography: {
    ...baseTheme.typography,
  },
  mode: 'light'
});

export { lightTheme, darkTheme };