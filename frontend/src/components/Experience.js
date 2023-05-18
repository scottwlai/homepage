import React from "react"
import {
  Box, Grid, Typography
} from "@mui/material";
import CustomCard from "./CustomCard";
import WorkIcon from '@mui/icons-material/Work';

const jobs = [
  {
    "image": "../logo192.png",
    "title": "Student Lab Assistant",
    "subtitle": "UT Austin School of Nursing, Simulation and Skills Center",
    "subtitleIcon": <WorkIcon sx={{
      fontSize: "1.375rem",
      color: "#333"
    }} />,
    "startDate": "Sep 2020",
    "endDate": "Dec 2020",
    "location": "Austin, TX",
    "bullets": [
      "Prepared lab equipment for daily simulations; all classes began equipped and on time",
      "Organized supply room; all equipment requests met on demand with 100% accuracy"
    ]
  }
];

const Experience = () => {
  return (
    <Box component="section">
      <Typography variant="h2" sx={{
        marginBottom: "1.5rem"
      }}>
        Experience
      </Typography>
      <Grid container spacing={"2.5rem"}>
        {jobs.map((job, index) => {
          return (
            <Grid item key={index} xs={12}>
              <CustomCard content={job} flexDirection="row" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Experience;
