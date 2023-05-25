import React from "react"
import {
  Box, Grid, Typography
} from "@mui/material";
import CustomCard from "./CustomCard";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const certifications = [
  {
    "image": "../logo192.png",
    "title": "HTML Essential Training",
    "subtitles": [
      {
        "subtitle": "LinkedIn Learning",
        "subtitleIcon": <MilitaryTechIcon/>
      }
    ],
    "startDate": "May 2022",
    "endDate": null,
    "location": null,
    "bullets": null,
    "columns": 1,
    "tags": false
  },
  {
    "image": "../logo192.png",
    "title": "CSS Essential Training",
    "subtitles": [
      {
        "subtitle": "LinkedIn Learning",
        "subtitleIcon": <MilitaryTechIcon/>
      }
    ],
    "startDate": "Jun 2022",
    "endDate": null,
    "location": null,
    "bullets": null,
    "columns": 1,
    "tags": false
  },
  {
    "image": "../logo192.png",
    "title": "JavaScript Essential Training",
    "subtitles": [
      {
        "subtitle": "LinkedIn Learning",
        "subtitleIcon": <MilitaryTechIcon/>
      }
    ],
    "startDate": "Jun 2022",
    "endDate": null,
    "location": null,
    "bullets": null,
    "columns": 1,
    "tags": false
  },
  {
    "image": "../logo192.png",
    "title": "Git Essential Training",
    "subtitles": [
      {
        "subtitle": "LinkedIn Learning",
        "subtitleIcon": <MilitaryTechIcon/>
      }
    ],
    "startDate": "Jun 2022",
    "endDate": null,
    "location": null,
    "bullets": null,
    "columns": 1,
    "tags": false
  },
  {
    "image": "../logo192.png",
    "title": "Responsive Layout",
    "subtitles": [
      {
        "subtitle": "LinkedIn Learning",
        "subtitleIcon": <MilitaryTechIcon/>
      }
    ],
    "startDate": "Jul 2022",
    "endDate": null,
    "location": null,
    "bullets": null,
    "columns": 1,
    "tags": false
  },
  {
    "image": "../logo192.png",
    "title": "React.js Essential Training",
    "subtitles": [
      {
        "subtitle": "LinkedIn Learning",
        "subtitleIcon": <MilitaryTechIcon sx={{
          fontSize: "1.375rem",
          color: "#333"
        }} />
      }
    ],
    "startDate": "May 2023",
    "endDate": null,
    "location": null,
    "bullets": null,
    "columns": 1,
    "tags": false
  }
];

const Certifications = () => {
  return (
    <Box component="section">
      <Typography variant="h2" sx={{
        marginBottom: "1.5rem"
      }}>
        Certifications
      </Typography>
      <Grid container spacing={"2.5rem"}>
        {certifications.map((certification, index) => {
          return (
            <Grid item key={index} xs={4}>
              <CustomCard content={certification} flexDirection="column" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Certifications;
