import React from "react";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select
} from "@mui/material";

const ExactFilter = ({
  multiple,
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
  /**
   * Updates the search parameters to reflect the new value of the filter
   *
   * Also resets the page to 1
   *
   * @param event the event source of the callback
   */
  const handleChange = (event) => {
    // extract the new value
    const newValue = event.target.value;
    // translate the new value if a translator is provided
    const translatedValue = translator
      ? newValue.map((value) => translator[value]).join(",")
      : newValue;
    setSearchParams((prev) => {
      // update the search parameter
      prev.set(searchParam, translatedValue);
      // remove the search parameter if it is the default value
      prev.delete(searchParam, defaultValue);
      // reset the page to 1
      prev.delete("page");
      return new URLSearchParams(prev);
    });
  };

  return (
    <FormControl fullWidth sx={sx}>
      <InputLabel id={`${id}-label`}>
        {label}
      </InputLabel>
      {value && (<Select
        multiple={multiple}
        id={id}
        labelId={`${id}-label`}
        value={value}
        onChange={handleChange}
        input={<OutlinedInput
          id={`${id}-chip`}
          label={label}
        />}
        renderValue={multiple ? (selected) => (
          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.5
          }}>
            {selected.map((value) => (
              <Chip label={value} key={value} />
            ))}
          </Box>
        ) : null}
        sx={{ height: "100%" }}
      >
        {options.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>)}
    </FormControl>
  );
}

export default ExactFilter;
