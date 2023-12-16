import React from "react";
import {
  Box,
  Chip
} from "@mui/material";

const Chips = ({
  data
}) => {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 0.5,
        paddingInlineStart: 0
      }}
    >
      {data.map((entry, index) => {
        return (
          <Chip
            label={entry}
            component="li"
            key={index}
          />
        );
      })}
    </Box>
  );
};

export default Chips;
