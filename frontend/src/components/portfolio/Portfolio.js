import React from "react"
import Wrapper from "../common/Wrapper";
import EducationSection from "./EducationSection"
import {
  Grid,
  Typography
} from "@mui/material";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import HonorsSection from "./HonorsSection";
import CertificationsSection from "./CertificationsSection";
import Title from "../common/Title";

const Portfolio = () => {
  return (
    <main>
      <Wrapper>
        <Title>
          Portfolio
        </Title>
      </Wrapper>
      <Wrapper>
        <Grid
          container
          spacing={{
            xs: 4,
            sm: 2,
            md: 3
          }}
        >
          <Grid
            item
            component="section"
            xs={12}
            sm={8}
          >
            <EducationSection />
          </Grid>
          <Grid
            item
            component="section"
            xs={12}
            sm={4}
          >
            <SkillsSection />
          </Grid>
          <Grid
            item
            component="section"
            xs={12}
          >
            <ProjectsSection />
          </Grid>
          <Grid
            item
            component="section"
            xs={12}
          >
            <ExperienceSection />
          </Grid>
          <Grid
            item
            component="section"
            xs={12}
          >
            <HonorsSection />
          </Grid>
          <Grid
            item
            component="section"
            xs={12}
          >
            <CertificationsSection />
          </Grid>
        </Grid>
      </Wrapper>
    </main>
  );
}

export default Portfolio;
