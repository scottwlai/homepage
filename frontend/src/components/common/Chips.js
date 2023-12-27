import React from "react";
import {
  Box,
  Chip,
  useTheme
} from "@mui/material";

const Chips = ({
  data
}) => {
  const theme = useTheme();

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
            sx={{
              fontSize: theme.typography.body1.fontSize
            }}
          />
        );
      })}
    </Box>
  );
};

export default Chips;
