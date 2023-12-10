import React from "react";
import Layout from "./Layout";
import Projects from "./Projects";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Honors from "./Honors";
import Skills from "./Skills";
import Education from "./Education";
import {
  Grid
} from "@mui/material";

const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      {/* <Grid item xs={8}>
        <Education />
      </Grid>
      <Grid item xs={4}>
        <Skills />
      </Grid>
      <Projects />
      <Certifications />
      <Experience />
      <Honors /> */}
    </Layout>
  );
}

export default Portfolio;
