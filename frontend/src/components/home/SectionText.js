import { Box } from "@mui/material";
import React from "react";

const SectionText = ({
  alignRight,
  children
}) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: {
        xs: "center",
        sm: alignRight ? "end" : "start"
      },
      gridArea: "txt",
      alignItems: {
        xs: "center",
        sm: alignRight ? "end" : "start"
      }
    }}>
      {children}
    </Box>
  );
};

export default SectionText;
