'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#5f43b2',
      light: '#afa0d8',
      dark: '#3d309a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#5654a0',
      light: '#a6a9cf',
      dark: '#332767',
      contrastText: '#fff',
    },
    background: {
      default: '#fefdfd',
      paper: '#fefdfd',
    },
  },
});

export default theme;
