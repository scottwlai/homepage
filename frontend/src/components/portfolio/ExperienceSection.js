import React from "react";
import Section from "./Section";
import {
  Typography
} from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';

const ExperienceSection = () => {
  return (
    <Section
      title="Experience"
      icon={<WorkIcon />}
    >
      <Typography>
        nursing
      </Typography>
    </Section>
  );
};

export default ExperienceSection;
