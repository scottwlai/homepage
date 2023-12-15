import React from "react";
import {
  Container
} from "@mui/material";

const Wrapper = ({
  children
}) => {
  return (
    <Container
      sx={{
        display: "grid",
        justifyItems: "center",
        alignContent: "center",
        height: "100%"
      }}
    >
      {children}
    </Container>
  );
};

export default Wrapper;
