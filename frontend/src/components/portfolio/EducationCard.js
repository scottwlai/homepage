import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import GenericCard from "../common/GenericCard";
import {
  Typography
} from "@mui/material";
import {
  formatDate
} from "../common/timeUtils"
import Chips from "../common/Chips";

const action = {
  "to": "/portfolio/courses",
  "text": "View Coursework"
}

const EducationCard = ({
  school
}) => {
  const prepEducation = ((school) => {
    let newSchool = {
      "subtitles": []
    };
    if (school.emblem != null) {
      newSchool["image"] = school.emblem;
    } else {
      newSchool["title"] = school.name
    }
    school.degrees.map((degree) => {
      newSchool.subtitles.push({
        "subtitle": degree,
        "icon": <SchoolIcon/>
      })
    });
    newSchool.subtitles.push(
      {
        "subtitle": `GPA: ${school.gpa}`,
        "icon": <MilitaryTechIcon/>
      }, {
        "subtitle": `${formatDate(school.startDate)} - ${formatDate(school.endDate)}`,
        "icon": <CalendarMonthIcon/>
      }, {
        "subtitle": `${school.city}`,
        "icon": <PlaceIcon/>
      }
    );
    return newSchool;
  });

  return (
    <>
      <GenericCard data={prepEducation(school)} action={action}>
        {/* <Typography variant="h3">
          Relevant Coursework:
        </Typography>
        <Chips data={school.coursework}/> */}
      </GenericCard>
    </>
  );
}

export default EducationCard;
