'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Ubuntu',
      'var(--font-roboto)',
      'Arial',
      'sans-serif'
    ].join(', '),
  },
  palette: {
    primary: {
      main: '#42454A',
    },
  },
});

export default theme;
