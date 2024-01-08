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
  translator,
  searchParam,
  setSearchParams,
  defaultValue,
  options,
  sx
}) => {
  const theme = useTheme();

  /**
   * Updates the search parameters to reflect the new range of values selected
   *
   * Also resets the page to 1
   *
   * @param {Event} _ the event source of the callback (not used)
   * @param {*} newValue the new range of values selected
   */
  const handleChange = (_, newValue) => {
    // extract the new values
    const min = translator ? translator[newValue[0]] : newValue[0];
    const max = translator ? translator[newValue[1]] : newValue[1];
    setSearchParams((prev) => {
      // update the search parameter
      prev.set(searchParam[0], min);
      prev.set(searchParam[1], max);
      // remove the search parameter if it is the default value
      prev.delete(searchParam[0], defaultValue[0]);
      prev.delete(searchParam[1], defaultValue[1]);
      // reset the page to 1
      prev.delete("page");
      return new URLSearchParams(prev);
    });
  };

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
        onChange={handleChange}
        marks={options}
        step={null}
        min={options[0].value}
        max={options[options.length - 1].value}
      />
    </Box>
  );
}

export default RangeFilter;
