import React from "react";
import {
  IconButton,
  Tooltip,
  useTheme
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const DarkModeSwitch = ({
  onDarkModeToggle
}) => {
  const theme = useTheme();

  return (
    <Tooltip title="Toggle dark mode">
      <IconButton
        color="inherit"
        aria-label="Toggle dark mode"
        onClick={onDarkModeToggle}
      >
        {theme.palette.mode === "light" ? (
          <Brightness4Icon />
        ) : (
          <Brightness7Icon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeSwitch;
