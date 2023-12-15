import React from "react"
import Wrapper from "../Wrapper";
import EducationSection from "./EducationSection"
import {
  Grid,
  Typography
} from "@mui/material";
import Section from "../common/Section";
// import Projects from "../Projects";
// import Experience from "../Experience";
// import Certifications from "../Certifications";
// import Honors from "../Honors";
// import Skills from "../Skills";
// import {
//   Grid
// } from "@mui/material";

const Portfolio = () => {
  return (
    <main>
      <Section>
        <Wrapper>
          <Typography
            variant="h1"
            align="center"
            sx={{
              my: "6rem"
            }}
          >
            Portfolio
          </Typography>
          <EducationSection />
          {/*
          <Grid item xs={4}>
            <Skills />
          </Grid>
          <Projects />
          <Certifications />
          <Experience />
          <Honors /> */}
        </Wrapper>
      </Section>
    </main>
  );
}

export default Portfolio;
