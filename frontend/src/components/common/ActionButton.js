import React from "react";
import {
  Button,
  Typography
} from "@mui/material";
import {
  Link
} from "react-router-dom";

const ActionButton = ({
  variant,
  link,
  target,
  children
}) => {
  return (
    <Button
      variant={variant}
      component={Link}
      to={link}
      target={target}
      rel="noopener noreferrer"
    >
      <Typography variant="button">
        {children}
      </Typography>
    </Button>
  )
};

export default ActionButton;
