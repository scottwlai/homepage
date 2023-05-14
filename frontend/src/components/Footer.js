import { Toolbar, Container, Button, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer>
      <Toolbar component="nav" sx={{
        bgcolor: "#1976d2",
        color: "#fff",
        py: 2
      }}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6} md={3} sx={{
              display: "flex",
              justifyContent: "center",
              "@media (max-width: 960px)": { justifyContent: "flex-start" }
            }}>
              <Button color="inherit" component={Link}
                to="https://linkedin.com/in/scottwlai"
                sx={{ px: 2 }}>
                <LinkedInIcon sx={{ pr: 1 }} />
                <Typography variant="button" textTransform="none">LinkedIn</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{
              display: "flex",
              justifyContent: "center",
              "@media (max-width: 960px)": { justifyContent: "flex-start" }
            }}>
              <Button color="inherit" component={Link}
                to="https://github.com/scottwlai"
                sx={{ px: 2 }}>
                <GitHubIcon sx={{ pr: 1 }} />
                <Typography variant="button" textTransform="none">GitHub</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{
              display: "flex",
              justifyContent: "center",
              "@media (max-width: 960px)": { justifyContent: "flex-start" }
            }}>
              <Button color="inherit" component={Link}
                to="mailto:scottlai@cs.utexas.edu"
                sx={{ px: 2 }}>
                <EmailIcon sx={{ pr: 1 }} />
                <Typography variant="button" textTransform="none">
                  scottlai@cs.utexas.edu
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{
              display: "flex",
              justifyContent: "center",
              "@media (max-width: 960px)": { justifyContent: "flex-start" }
            }}>
              <Button color="inherit" component={Link}
                to="tel:+17138205695"
                sx={{ px: 2 }}>
                <PhoneIcon sx={{ pr: 1 }} />
                <Typography variant="button" textTransform="none">(713) 820-5695</Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </footer >
  );
}

export default Footer;
