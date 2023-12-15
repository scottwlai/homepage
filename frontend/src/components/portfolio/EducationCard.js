import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import GenericCard from "../common/GenericCard";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import {
  formatDate
} from "../common/timeUtils"

const action = {
  "to": "/portfolio/courses",
  "text": "See More"
}

const EducationCard = ({
  school
}) => {
  const prepEducation = ((school) => {
    let newSchool = {
      "image": school.emblem,
      "title": school.name,
      "subtitles": []
    };
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
        <Typography>
          Relevant Coursework:
        </Typography>
        <List>
          {school.coursework.map((course, index) => {
            return (
              <ListItem key={index}>
                <ListItemIcon>
                  <ChevronRightIcon/>
                </ListItemIcon>
                <ListItemText>
                  {course}
                </ListItemText>
              </ListItem>
            )
          })}
        </List>
      </GenericCard>
    </>
  );
}

export default EducationCard;
