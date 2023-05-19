import {
  Container, useTheme, Typography
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
        display: "grid",
        gap: "4rem",
        width: "min(1000px, 90%)"
      }}>
        <Typography variant="h1" align="center" gutterBottom>{title}</Typography>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
