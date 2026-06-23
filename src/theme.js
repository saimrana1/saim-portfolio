import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0e0e10',
      paper: '#16161a',
    },
    primary: {
      main: '#ff6f5b', // coral
    },
    secondary: {
      main: '#8fe3c8', // mint
    },
    text: {
      primary: '#f4f1ea',
      secondary: '#a4a3ad',
    },
    divider: 'rgba(255,255,255,0.08)',
  },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    // Editorial serif for display headings
    h1: {
      fontFamily: "'Fraunces', Georgia, serif",
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.02,
    },
    h2: {
      fontFamily: "'Fraunces', Georgia, serif",
      fontWeight: 500,
      letterSpacing: '-0.015em',
      lineHeight: 1.08,
    },
    h3: {
      fontFamily: "'Fraunces', Georgia, serif",
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 100,
          paddingInline: 22,
          paddingBlock: 11,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#0e0e10' },
      },
    },
  },
})

export default theme
