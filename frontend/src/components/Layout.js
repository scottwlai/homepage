import {
  Container, useTheme, Typography, Grid
} from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  title, children
}) => {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Container disableGutters component="main" sx={{
        paddingY: theme.mixins.toolbar.minHeight / 4,
        width: "min(1000px, 90%)"
      }}>
        <Typography variant="h1" align="center" gutterBottom>{title}</Typography>
        <Grid container spacing={"2rem"} sx={{
        }}>
          {children}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
