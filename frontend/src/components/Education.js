import React from "react";
import {
  Box,
  Button,
  Typography
} from "@mui/material";
import {
  Link
} from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CustomCard from "./CustomCard.js";

const ut = {
  "image": null,
  "title": "University of Texas at Austin",
  "subtitles": [
    {
      "subtitle": "B.S. Computer Science",
      "subtitleIcon": <SchoolIcon/>
    },
    {
      "subtitle": "Business Minor",
      "subtitleIcon": <SchoolIcon/>
    },
    {
      "subtitle": "GPA: 3.6542",
      "subtitleIcon": <MilitaryTechIcon/>
    }
  ],
  "startDate": "Aug 2020",
  "endDate": "May 2024",
  "location": "Austin, TX",
  "bullets": null,
  "columns": 1,
  "tags": false
}

const Education = () => {
  return (
    <Box component="section">
      <Typography variant="h2" sx={{
        marginBottom: "1.5rem"
      }}>
        Education
      </Typography>
      <CustomCard content={ut} flexDirection="column">
        <Button component={Link} to={"/portfolio/courses"}>
          <Typography variant="button" textTransform="none">
            Coursework
          </Typography>
        </Button>
      </CustomCard>
    </Box>
  );
}

export default Education;
