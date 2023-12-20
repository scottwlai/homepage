import React from "react";
import {
  Box
} from "@mui/material";
import HeaderLink from "./HeaderLink";
import {
  pages
} from "./pages";

const DesktopNavigation = () => {
  return (
    <Box sx={{
      display: {
        xs: "none",
        sm: "flex"
      }
    }}>
      {pages.map((page, index) => {
        return (
          <HeaderLink
            text={page.name}
            link={page.link}
            style={{
              width: "100%"
            }}
            key={index}
          />
        );
      })}
    </Box>
  );
};

export default DesktopNavigation;
