'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Calistoga',
      'Ubuntu',
      'var(--font-roboto)',
      'Arial',
      'sans-serif'
    ].join(', '),
    h1: {
      fontSize: '80px',
    },
    body1: {
      fontSize: '18px',
    },
  },
  palette: {
    primary: {
      main: '#42454A',
    },
  },
});

export default theme;
