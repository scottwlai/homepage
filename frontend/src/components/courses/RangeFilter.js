import React from "react";
import {
  Box,
  Slider,
  Typography,
  useTheme
} from "@mui/material";

const RangeFilter = ({
  label,
  id,
  value,
  onChange,
  options,
  sx
}) => {
  const theme = useTheme();

  return (
    <Box sx={{
      ...sx,
      borderRadius: "4px",
      border: theme.palette.mode === "dark" ? `0.8px solid rgb(133, 133, 133)` : `0.8px solid rgba(0, 0, 0, 0.23)`,
      p: "1.5rem",
      '&:hover': {
        border: `0.8px solid ${theme.palette.text.primary}`
      }
    }}>
      <Typography align="center" variant="h3" id={id}>
        {label}
      </Typography>
      <Slider
        aria-labelledby={id}
        getAriaValueText={(value) => `${value[0]} to ${value[1]}`}
        value={value}
        onChange={onChange}
        marks={options}
        step={null}
        min={options[0].value}
        max={options[options.length - 1].value}
      />
    </Box>
  );
}

export default RangeFilter;
