import React from "react";
import {
  Paper
} from "@mui/material";

const SectionImage = ({
  src,
  alt,
  width,
  sx
}) => {
  return (
    <Paper elevation={3} sx={sx}>
      <img
        src={src}
        alt={alt}
        width={width}
        style={sx}
      />
    </Paper>
  );
};

export default SectionImage;
