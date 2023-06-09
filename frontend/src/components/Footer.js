import React from "react";
import {
  Link
} from "react-router-dom";
import {
  Toolbar, Container, Button, Typography, Grid
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const links = [
  {
    "to": "https://linkedin.com/in/scottwlai",
    "icon": <LinkedInIcon sx={{
      pr: 1
    }} />,
    "text": "LinkedIn"
  },
  {
    "to": "https://github.com/scottwlai",
    "icon": <GitHubIcon sx={{
      pr: 1
    }} />,
    "text": "GitHub"
  },
  {
    "to": "mailto:scottlai@cs.utexas.edu",
    "icon": <EmailIcon sx={{
      pr: 1
    }} />,
    "text": "scottlai@cs.utexas.edu"
  },
  {
    "to": "tel:+17138205695",
    "icon": <PhoneIcon sx={{
      pr: 1
    }} />,
    "text": "(713) 820-5695"
  }
];

const Footer = () => {
  return (
    <footer>
      <Toolbar component="nav" sx={{
        py: 2
      }}>
        <Container disableGutters aria-label="footer buttons" sx={{
          width: "min(1000px, 90%)"
        }}>
          <Grid container>
            {links.map((link, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={3} sx={{
                  display: "flex",
                  justifyContent: "center",
                  "@media (max-width: 960px)": {
                    justifyContent: "flex-start"
                  }
                }}>
                  <Button
                    variant="text" component={Link} to={link.to} sx={{
                      px: 3,
                      py: 0,
                      borderRadius: "1.5rem",
                      color: "#fafafa"
                    }}>
                    {link.icon}
                    <Typography fontSize="1rem" variant="button" textTransform="none">
                      {link.text}
                    </Typography>
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Toolbar>
    </footer >
  );
}

export default Footer;
