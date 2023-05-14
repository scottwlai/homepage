import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const Layout = ({ title, children }) => {
  return (
    <>
      <header>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Container>
              <Typography variant="h6">
                {title}
              </Typography>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link to="/demo">Demo</Link>
                  </li>
                </ul>
              </nav>
            </Container>
          </Toolbar>
        </AppBar>

      </header>
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <footer>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Container>
              <Typography variant="h6">Scott Lai</Typography>
              <nav>
                <ul>
                  <li>
                    <Link to="https://linkedin.com/in/scottwlai">LinkedIn</Link>
                  </li>
                  <li>
                    <Link to="https://github.com/scottwlai">GitHub</Link>
                  </li>
                  <li>
                    <Link to="mailto:scottlai@cs.utexas.edu">scottlai@cs.utexas.edu</Link>
                  </li>
                  <li>
                    <Link to="tel:+17138205695">(713) 820-5695</Link>
                  </li>
                </ul>
              </nav>
            </Container>
          </Toolbar>
        </AppBar>
      </footer>
    </>
  );
};

export default Layout;
