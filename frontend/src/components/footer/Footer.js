import React from "react";
import {
  Link
} from "react-router-dom";
import {
  Toolbar,
  Container,
  Button,
  useTheme
} from "@mui/material";
import links from "./links";

const Footer = () => {
  const theme = useTheme();

  return (
    <footer>
      <Toolbar sx={{
        backgroundColor: theme.palette.mode === "light"
          ? theme.palette.primary.main
          : theme.palette.background.paper,
        backgroundImage: theme.palette.mode === "light"
          ? ""
          : `linear-gradient(
              rgba(255, 255, 255, 0.09),
              rgba(255, 255, 255, 0.09)
          )`,
        boxShadow: `
          0px -2px 4px -1px rgba(0,0,0,0.2),
          0px -4px 5px 0px rgba(0,0,0,0.14),
          0px -1px 10px 0px rgba(0,0,0,0.12)
        `,
        py: {
          xs: "clamp(8px, 2.5vw, 16px)",
          sm: "0"
        }
      }}>
        <Container
          aria-label="footer buttons"
          sx={{
            textAlign: "center"
          }}
        >
          {links.map((link, index) => {
            return (
              <Button
                component={Link}
                to={link.url}
                startIcon={link.icon}
                size="large"
                key={index}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  m: "4px"
                }}
              >
                {link.text}
              </Button>
            );
          })}
        </Container>
      </Toolbar>
    </footer >
  );
}

export default Footer;
