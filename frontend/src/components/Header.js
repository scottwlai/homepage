import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Container, Typography, ButtonGroup, Button } from "@mui/material";

const links = [
  {
    "to": "/",
    "sx": { marginRight: "auto" },
    "variant": "h6",
    "text": "Scott Lai"
  },
  {
    "to": "/courses",
    "sx": {},
    "variant": "button",
    "text": "Courses"
  },
  {
    "to": "/",
    "sx": {},
    "variant": "button",
    "text": "Demo"
  }
];

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar component="nav">
        <Container>
          <ButtonGroup variant="text" aria-label="navigation buttons" sx={{
            "& .MuiButtonGroup-grouped:not(:last-child)": { borderRight: "none" },
            display: "flex",
            flexDirection: "row",
            justifyContent: "right"
          }}>
            {links?.map((link, index) => {
              return (
                <Button key={index} color="inherit" component={Link} to={link.to} sx={link.sx}>
                  <Typography variant={link.variant} textTransform="none">{link.text}</Typography>
                </Button>
              );
            })}
          </ButtonGroup>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
