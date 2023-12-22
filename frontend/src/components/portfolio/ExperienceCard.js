import React from "react";
import GenericCard from "../common/GenericCard";
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import {
  formatDate
} from "../common/timeUtils";

const ExperienceCard = ({
  experience
}) => {
  const prepExperience = ((experience) => {
    let newExperience = {
      "image": experience.photo,
      "title": experience.title,
      "subtitles": [
        {
          "subtitle": experience.employer,
          "icon": <BusinessIcon />
        },
        {
          "subtitle": `${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}`,
          "icon": <CalendarMonthIcon />
        },
        {
          "subtitle": experience.city,
          "icon": <PlaceIcon />
        }
      ],
      "actions": [
        {
          "text": "More Info"
        }
      ],
      "info": experience.impact
    };
    return newExperience;
  });

  return (
    <GenericCard
      data={prepExperience(experience)}
      sx={{
        display: "grid",
        gridTemplateAreas: {
          xs: `
            "img"\n
            "head"\n
            "content"\n
            "action"
          `,
          sm: `
            "img head"\n
            "img content"\n
            "img action"
          `
        },
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 2fr",
          md: "1fr 3fr"
        },
        gridTemplateRows: {
          xs: "auto auto auto",
          sm: "auto auto 1fr"
        },
        columnGap: {
          xs: "0.5rem",
          md: "1.5rem"
        }
      }}
    />
  );
};

export default ExperienceCard;
