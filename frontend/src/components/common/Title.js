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
        my: "6rem"
      }}
    >
      {children}
    </Typography>
  )
};

export default Title;
