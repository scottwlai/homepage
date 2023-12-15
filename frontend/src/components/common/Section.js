import React from "react";
import {
  Box
} from "@mui/material";

const Section = ({
  children,
  id,
  sx
}) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        height: "100%",
        py: "5rem",
        ...sx
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
