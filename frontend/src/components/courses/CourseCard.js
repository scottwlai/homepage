import React from "react";
import {
  abbrToDept
} from "./filters";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const CourseCard = ({
  course
}) => {
  const department = course.courseNumber.department;
  const number = course.courseNumber.number;
  const courseNumber = `${department} ${number}`;

  const details = [
    {
      "icon": <MenuBookIcon />,
      "text": abbrToDept[department.replace(" ", "")]
    },
    {
      "icon": <AssignmentIndIcon />,
      "text": course.instructors.join(" & ")
    },
    {
      "icon": <CalendarMonthIcon />,
      "text": course.term.semester + " " + course.term.year
    }
  ];

  return (
    <Card raised sx={{
      height: "100%",
      display: "grid",
      gridTemplateAreas: `
        "img"\n
        "header"\n
        "content"
      `,
      gridTemplateRows: "auto 1fr auto"
    }}>
      <CardMedia
        component="img"
        src={`https://www.cs.utexas.edu/~scottlai/courses/${courseNumber.replaceAll(" ", "").toLowerCase()}.jpg`}
        alt={course.name}
        width={230}
        height={150}
        sx={{
          gridArea: "img",
          objectFit: "cover"
        }}
      />
      <CardHeader
        title={course.nickname}
        subheader={courseNumber}
        subheaderTypographyProps={{
          fontFamily: "'Ubuntu Mono', monospace"
        }}
        sx={{
          gridArea: "header",
          alignSelf: "start"
        }}
      />
      <CardContent component={List} sx={{
        gridArea: "content",
        alignSelf: "end"
      }}>
        {details.map((detail, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {detail.icon}
            </ListItemIcon>
            <ListItemText>
              {detail.text}
            </ListItemText>
          </ListItem>
        ))}
      </CardContent>
    </Card>
  );
}

export default CourseCard;
