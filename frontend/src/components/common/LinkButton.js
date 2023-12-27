import React from "react";
import {
  Button
} from "@mui/material";
import {
  HashLink
} from "react-router-hash-link";

const LinkButton = ({
  link,
  variant,
  children
}) => {
  return (
    <HashLink
      tabIndex={-1}
      smooth
      to={link}
    >
      <Button
        variant={variant ? variant : "contained"}
        size="large"
      >
        {children}
      </Button>
    </HashLink>
  )
};

export default LinkButton;
