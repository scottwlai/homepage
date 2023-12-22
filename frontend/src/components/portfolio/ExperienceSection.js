import React from "react";
import Section from "./Section";
import {
  Typography
} from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    "photo": "https://cs.utexas.edu/~scottlai/images/supply-600.jpg",
    "title": "Student Lab Assistant",
    "employer": "UT Austin School of Nursing, Simulation & Skills Center",
    "startDate": "Sep 2020",
    "endDate": "Dec 2020",
    "city": "Austin, TX",
    "impact": [
      "Retrieved lab equipment on-demand within 30 seconds by memorizing the layout of the supply room, saving 90 minutes per semester & allowing all classes to start on time",
      "Performed various tech-related tasks: machine start-up, organizing equipment, tech support, software installation"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <Section
      title="Experience"
      icon={<WorkIcon />}
    >
      {experiences.map((experience, index) => {
        return (
          <ExperienceCard experience={experience} key={index} />
        );
      })}
    </Section>
  );
};

export default ExperienceSection;
