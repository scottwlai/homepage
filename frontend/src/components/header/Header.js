import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container
} from "@mui/material";
import DarkModeSwitch from "./DarkModeSwitch";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import Name from "./Name";

const Header = ({
  handleThemeToggle
}) => {
  return (
    <AppBar
      color="primary"
    >
      <Container component="nav">
        <Toolbar>
          <Name />
          <Box>
            <DesktopNavigation />
            <MobileNavigation />
          </Box>
          <DarkModeSwitch onDarkModeToggle={handleThemeToggle} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
