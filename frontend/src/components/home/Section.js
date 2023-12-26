import React from "react";
import Wrapper from "../common/Wrapper";
import {
  useTheme
} from "@mui/material";

const Section = ({
  alignRight,
  children
}) => {
  const theme = useTheme();

  return (
    <Wrapper boxSx={{
      height: "100%"
    }} containerSx={{
      gridTemplateColumns: {
        xs: "1fr",
        sm: "auto 1fr"
      },
      gridTemplateAreas: {
        xs: `
          "img"\n
          "txt"
        `,
        sm: alignRight ? `"txt img"` : `"img txt"`
      },
      gap: theme.typography.h1.fontSize,
      alignItems: "center"
    }}>
      {children}
    </Wrapper>
  );
};

export default Section;
