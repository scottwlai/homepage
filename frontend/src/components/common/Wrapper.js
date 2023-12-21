import React from "react";
import {
  Box,
  Container
} from "@mui/material";

const Wrapper = ({
  boxSx,
  containerSx,
  children
}) => {
  return (
    <Box
      sx={{
        height: "100%",
        py: "5rem",
        ...boxSx
      }}
    >
      <Container
        sx={{
          display: "grid",
          justifyItems: "center",
          alignContent: "center",
          height: "100%",
          ...containerSx
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Wrapper;
