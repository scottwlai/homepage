import { Toolbar, Container, Button, ButtonGroup, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Toolbar component="nav" sx={{
        bgcolor: "#1976d2",
        color: "#fff"
      }}>
        <Container>
          <ButtonGroup variant="text" aria-label="contact buttons" sx={{
            "& .MuiButtonGroup-grouped:not(:last-child)": { borderRight: "none" },
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}>
            <Button color="inherit" component={Link} to="https://linkedin.com/in/scottwlai">
              <Typography variant="button" textTransform="none">LinkedIn</Typography>
            </Button>
            <Button color="inherit" component={Link} to="https://github.com/scottwlai">
              <Typography variant="button" textTransform="none">GitHub</Typography>
            </Button>
            <Button color="inherit" component={Link} to="mailto:scottlai@cs.utexas.edu">
              <Typography variant="button" textTransform="none">scottlai@cs.utexas.edu</Typography>
            </Button>
            <Button color="inherit" component={Link} to="tel:+17138205695">(713) 820-5695</Button>
          </ButtonGroup>
        </Container>
      </Toolbar>
    </footer >
  );
}

export default Footer;
