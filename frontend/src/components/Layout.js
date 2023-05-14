import {
  AppBar, Toolbar, Container, useTheme,
  Typography, ButtonGroup, Button
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
  const theme = useTheme();
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar component="nav">
          <Container>
            <ButtonGroup variant="text" aria-label="navigation buttons" sx={{
              "& .MuiButtonGroup-grouped:not(:last-child)": { borderRight: "none" },
              display: "flex",
              flexDirection: "row",
              justifyContent: "right"
            }}>
              <Button color="inherit" component={Link} to="/" sx={{marginRight: "auto"}}>
                <Typography variant="h6" textTransform="none">Scott Lai</Typography>
              </Button>
              <Button color="inherit" component={Link} to="/courses">
                <Typography variant="button" textTransform="none">Courses</Typography>
              </Button>
              <Button color="inherit" component={Link} to="/demo">
                <Typography variant="button" textTransform="none">Demo</Typography>
              </Button>
            </ButtonGroup>
          </Container>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ paddingY: theme.mixins.toolbar.minHeight / 4 }}>
          <Typography variant="h6">{title}</Typography>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
