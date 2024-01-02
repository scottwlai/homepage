import React from "react";
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

const abbreviations = {
  "C S": "Computer Science",
  "MAN": "Management",
  "MIS": "Management Information Systems",
  "ACC": "Accounting",
  "ANS": "Asian Studies",
  "LEB": "Legal Environment of Business",
  "CH": "Chemistry",
  "M": "Mathematics",
  "HIS": "History",
  "SDS": "Statistics and Data Sciences",
  "MUS": "Music",
  "GOV": "Government",
  "UGS": "Undergraduate Studies"
}

const iconProps = {
  fontSize: "1.25rem"
}

const CourseCard = ({
  name, courseNumber, instructors, term
}) => {
  const details = [
    {
      "icon": <MenuBookIcon sx={iconProps} />,
      "text": abbreviations[courseNumber.department]
    },
    {
      "icon": <AssignmentIndIcon sx={iconProps} />,
      "text": instructors.join(" & ")
    },
    {
      "icon": <CalendarMonthIcon sx={iconProps} />,
      "text": term.semester + " " + term.year
    }
  ]

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
        src="../logo192.png"
        sx={{
          gridArea: "img"
        }}
      />
      <CardHeader
        title={name}
        subheader={`${courseNumber.department} ${courseNumber.number}`}
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
