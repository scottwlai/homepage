import React from "react"
import {
  Box, Grid, Typography
} from "@mui/material";
import CustomCard from "./CustomCard";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const honors = [
  {
    "image": null,
    "title": "University Honors",
    "subtitle": "UT Austin",
    "subtitleIcon": <MilitaryTechIcon sx={{
      fontSize: "1.375rem",
      color: "#333"
    }} />,
    "startDate": "2020",
    "endDate": "2022",
    "location": null,
    "bullets": null
  },
  {
    "image": null,
    "title": "Houston Rodeo Scholar",
    "subtitle": "Houston Livestock Show and Rodeo",
    "subtitleIcon": <MilitaryTechIcon sx={{
      fontSize: "1.375rem",
      color: "#333"
    }} />,
    "startDate": "2020",
    "endDate": null,
    "location": null,
    "bullets": null
  }
];

const Honors = () => {
  return (
    <Box component="section">
      <Typography variant="h2" sx={{
        marginBottom: "1.5rem"
      }}>
        Honors
      </Typography>
      <Grid container spacing={"2.5rem"}>
        {honors.map((honor, index) => {
          return (
            <Grid item key={index} xs={6}>
              <CustomCard content={honor} flexDirection="column" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Honors;
