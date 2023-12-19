import React from "react";
import Section from "./Section";
import {
  Typography
} from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const HonorsSection = () => {
  return (
    <Section
      title="Honors"
      icon={<EmojiEventsIcon />}
    >
      <Typography>
        ut & hlsr
      </Typography>
    </Section>
  );
};

export default HonorsSection;
