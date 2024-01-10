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
  const details = [
    {
      "icon": <MenuBookIcon />,
      "text": course.department
    },
    {
      "icon": <AssignmentIndIcon />,
      "text": course.instructors.map((instructor) => `${instructor.first} ${instructor.last}`).join(" & ")
    },
    {
      "icon": <CalendarMonthIcon />,
      "text": course.semester
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
        src={`https://www.cs.utexas.edu/~scottlai/courses/${course.courseNumber.replaceAll(" ", "").toLowerCase()}.jpg`}
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
        subheader={course.courseNumber}
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
