import {
  createTheme
} from "@mui/material/styles";

// Base theme with common settings
const baseTheme = createTheme({
  typography: {
    fontFamily: [
      '"Ubuntu"',
      "Arial",
      "sans-serif"
    ].join(","),
    h1: {
      fontSize: "clamp(1rem, 8vw, 4rem)"
    },
    h2: {
      fontSize: "clamp(1.25rem, 5vw, 2rem)"
    },
    h3: {
      fontSize: "clamp(1.125rem, 3.125vw, 1.25rem)"
    },
    body1: {
      fontSize: "clamp(1rem, 3.125vw, 1.125rem)"
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "p",
          subtitle2: "p",
          body1: "p",
          body2: "p",
          inherit: "p"
        }
      }
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md"
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "2.5rem"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "1rem",
          marginBottom: 20
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          "&:last-child": {
            paddingBottom: 0
          }
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "8px 0 0 0"
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        avatar: {
          marginRight: 0
        }
      }
    }
  }
});

// light mode theme
export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    background: {
      paper: "#FDFDFD",
      default: "#EAEAEA"
    }
  }
});

// dark mode theme
export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    background: {
      paper: "#121212",
      default: "#1A1A1A"
    }
  }
});
