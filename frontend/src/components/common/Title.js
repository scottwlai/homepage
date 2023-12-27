import React from "react";
import {
  Typography
} from "@mui/material";

const Title = ({
  children
}) => {
  return (
    <Typography
      variant="h1"
      align="center"
      sx={{
        m: "6rem 0 1rem"
      }}
    >
      {children}
    </Typography>
  )
};

export default Title;
