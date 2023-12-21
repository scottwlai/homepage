import React from "react";
import Section from "./Section";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HonorCard from "./HonorCard";

const honors = [
  {
    "name": "University Honors",
    "issuer": "University of Texas at Austin",
    "startDate": "2020",
    "endDate": "2022"
  },
  {
    "name": "Rodeo Scholar",
    "issuer": "Houston Livestock Show & Rodeo",
    "startDate": "2020"
  }
];

const HonorsSection = () => {
  return (
    <Section
      title="Honors"
      icon={<EmojiEventsIcon />}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr"
        },
        gap: {
          xs: "0.25rem",
          sm: "2rem"
        }
      }}
    >
      {honors.map((honor, index) => {
        return (
          <HonorCard honor={honor} key={index} />
        );
      })}
    </Section>
  );
};

export default HonorsSection;
