import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter
} from 'react-router-dom';
import {
  CssBaseline,
  ThemeProvider, createTheme
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#9c27b0"
    },
    mode: "light"
  },
  typography: {
    h1: {
      color: "#333"
    },
    h2: {
      color: "#333",
      fontSize: "3rem"
    },
    h3: {
      color: "#333",
      fontSize: "1.75rem"
    },
    h4: {
      color: "#333",
      fontSize: "1.5rem"
    },
    h5: {
      color: "#333",
      fontSize: "1.25rem"
    },
    h6: {
      color: "#333",
      fontSize: "1.125rem"
    },
    body1: {
      color: "#333"
    },
    body2: {
      color: "#333"
    },
    subtitle1: {
      color: "#333"
    },
    subtitle2: {
      color: "#333"
    },
    caption: {
      color: "#333"
    }
  }
});

theme.components = {
  MuiToolbar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        color: theme.palette.primary.contrastText
      }
    }
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 32,
        width: "100%"
      }
    }
  }
};

console.log(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
