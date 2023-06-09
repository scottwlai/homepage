import React from "react";
import {
  Link
} from "react-router-dom";
import {
  AppBar, Toolbar, Container, Typography, Button
} from "@mui/material";

const links = [
  {
    "to": "/",
    "marginRight": "auto",
    "fontSize": "1.75rem",
    "text": "Scott Lai"
  },
  {
    "to": "/portfolio",
    "marginRight": 0,
    "fontSize": "1.25rem",
    "text": "Portfolio"
  },
  {
    "to": "/interests",
    "marginRight": 0,
    "fontSize": "1.25rem",
    "text": "Interests"
  },
  {
    "to": "/demo",
    "marginRight": 0,
    "fontSize": "1.25rem",
    "text": "Demo"
  }
];

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar component="nav">
        <Container disableGutters aria-label="navigation buttons" sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
          width: "min(1000px, 90%)"
        }}>
          {links?.map((link, index) => {
            return (
              <Button key={index} component={Link} to={link.to} sx={{
                marginRight: link.marginRight,
                px: 3,
                py: 0,
                borderRadius: "1.5rem",
                color: "#fafafa"
              }}>
                <Typography fontSize={link.fontSize} variant="button"
                  textTransform="none">
                  {link.text}
                </Typography>
              </Button>
            );
          })}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
