import React, {
  useState
} from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderLink from "./HeaderLink";
import {
  pages
} from "./pages";

const MobileNavigation = () => {
  const theme = useTheme();

  const [ anchorElNav, setAnchorElNav ] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{
      display: {
        xs: "flex",
        sm: "none"
      }
    }}>
      <IconButton
        size="large"
        aria-label="navigation menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        slotProps={{
          "paper": {
            "elevation": 0
          }
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: theme.palette.mode === "light" ? theme.palette.primary.main : theme.palette.background.paper
          }
        }}
      >
        {pages.map((page, index) => (
          <MenuItem
            disableGutters
            disableRipple
            key={index}
            onClick={handleCloseNavMenu}
          >
            <HeaderLink
              text={page.name}
              link={page.link}
              style={{
                width: "100%"
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileNavigation;
