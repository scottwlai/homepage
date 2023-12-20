import React from "react";
import {
  HashLink
} from "react-router-hash-link";
import {
  Button
} from "@mui/material";

const HeaderLink = ({
  text,
  link,
  style,
  buttonSx
}) => {
  return (
    <HashLink
      tabIndex={-1}
      smooth
      to={link}
      style={{
        ...style
      }}
    >
      <Button
        fullWidth
        disableElevation
        size="large"
        sx={{
          ...buttonSx,
          color: "#FFF",
          boxShadow: "none",
          bgcolor: "transparent"
        }}
      >
        {text}
      </Button>
    </HashLink>
  );
};

export default HeaderLink;
