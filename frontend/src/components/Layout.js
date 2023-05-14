import { Container, useTheme, Typography } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title, children }) => {
  const theme = useTheme();
  return (
    <>
      <Header />
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
