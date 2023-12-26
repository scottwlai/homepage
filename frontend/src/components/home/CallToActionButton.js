import React from "react";
import {
  Button
} from "@mui/material";
import {
  HashLink
} from "react-router-hash-link";

const CallToActionButton = ({
  link,
  children
}) => {
  return (
    <HashLink
      tabIndex={-1}
      smooth
      to={link}
    >
      <Button
        variant="contained"
        size="large"
      >
        {children}
      </Button>
    </HashLink>
  )
};

export default CallToActionButton;
