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
