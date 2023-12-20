import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  List,
  Typography
} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CustomListItem from "./CustomListItem";

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
    <Card sx={{
      height: "100%"
    }}>
      <CardMedia
        component="img"
        src="../logo192.png"
        sx={{
          width: "50%",
          margin: "8px auto"
        }}
      />
      <CardContent>
        <Typography variant="h5" align="center">
          {name}
        </Typography>
        <Typography variant="subtitle1" fontFamily="monospace" align="center">
          {courseNumber.department} {courseNumber.number}
        </Typography>
        <List>
          {details.map((detail, index) => {
            return (
              <React.Fragment key={index}>
                {Boolean(index) && (
                  <Divider component="li"/>
                )}
                <CustomListItem
                  icon={detail.icon}
                  text={detail.text}
                  textProps={{
                    variant: "subtitle2"
                  }}
                />
              </React.Fragment>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}

export default CourseCard;
