import React from "react";
import Wrapper from "../common/Wrapper";
import Title from "../common/Title";
import LinkButton from "../common/LinkButton";
import {
  Breadcrumbs, Typography
} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ConstructionIcon from '@mui/icons-material/Construction';

const Projects = () => {
  return (
    <main>
      <Wrapper>
        <Title>
          Projects
        </Title>
        <Breadcrumbs separator={<ChevronRightIcon />}>
          <LinkButton link="/portfolio/#" variant="text">
            Portfolio
          </LinkButton>
          <LinkButton link="/portfolio/projects/#" variant="text">
            Projects
          </LinkButton>
        </Breadcrumbs>
      </Wrapper>
      <Wrapper>
        <ConstructionIcon fontSize="large" sx={{
          mb: 2
        }}/>
        <Typography>
          Coming Soon!
        </Typography>
      </Wrapper>
    </main>
  );
};

export default Projects;
