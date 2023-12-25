import React from "react";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GradeIcon from '@mui/icons-material/Grade';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import GenericCard from "../common/GenericCard";
import {
  formatDate
} from "../common/timeUtils"

const EducationCard = ({
  school,
  sx
}) => {
  const prepEducation = ((school) => {
    let newSchool = {
      "subtitles": [],
      "actions": [
        {
          "text": "Coursework",
          "link": "/portfolio/courses"
        }
      ]
    };
    if (school.emblem != null) {
      newSchool["image"] = school.emblem;
    } else {
      newSchool["title"] = school.name
    }
    if (school.degrees != null) {
      school.degrees.map((degree) => {
        newSchool.subtitles.push({
          "subtitle": degree,
          "icon": <HistoryEduIcon/>
        })
      });
    }
    newSchool.subtitles.push(
      {
        "subtitle": `GPA: ${school.gpa}`,
        "icon": <GradeIcon/>
      }, {
        "subtitle": `${formatDate(school.startDate)} - ${formatDate(school.endDate)}`,
        "icon": <CalendarMonthIcon/>
      }, {
        "subtitle": `${school.city}`,
        "icon": <PlaceIcon/>
      }
    );
    if (school.summary) {
      newSchool.actions.push(
        {
          "text": "Records",
          "link": school.summary
        }
      );
    }
    return newSchool;
  });

  return (
    <GenericCard data={prepEducation(school)} sx={sx} />
  );
}

export default EducationCard;
