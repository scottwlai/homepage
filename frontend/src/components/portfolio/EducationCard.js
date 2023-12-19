import React from "react";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GradeIcon from '@mui/icons-material/Grade';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import GenericCard from "../common/GenericCard";
import {
  formatDate
} from "../common/timeUtils"

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
        "icon": <HistoryEduIcon/>
      })
    });
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
    return newSchool;
  });

  return (
    <GenericCard data={prepEducation(school)} action={action} />
  );
}

export default EducationCard;
