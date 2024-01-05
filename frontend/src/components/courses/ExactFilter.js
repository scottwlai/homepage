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
  onChange,
  options,
  sx
}) => (
  <FormControl fullWidth sx={sx}>
    <InputLabel id={`${id}-label`}>
      {label}
    </InputLabel>
    {value && (<Select
      multiple={multiple}
      id={id}
      labelId={`${id}-label`}
      value={value}
      onChange={onChange}
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

export default ExactFilter;
