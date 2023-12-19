import React from "react";
import {
  Box,
  Container
} from "@mui/material";

const Wrapper = ({
  children
}) => {
  return (
    <Box
      sx={{
        height: "100%",
        py: "5rem"
      }}
    >
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
    </Box>
  );
};

export default Wrapper;
