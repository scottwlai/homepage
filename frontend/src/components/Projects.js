import React from "react"
import {
  Box, Grid, Typography
} from "@mui/material";
import CustomCard from "./CustomCard";
import PersonIcon from '@mui/icons-material/Person';

const projects = [
  {
    "image": "../logo192.png",
    "title": "Internet Database",
    "subtitles": [
      {
        "subtitle": "Full Stack",
        "subtitleIcon": <PersonIcon sx={{
          fontSize: "1.375rem",
          color: "#333"
        }} />
      }
    ],
    "startDate": "Sep 2022",
    "endDate": "Dec 2022",
    "location": "Austin, TX",
    "bullets": [
      "Developed a dynamic website with a RESTful API using React and Flask",
      "Implemented backend searching, sorting, and filtering of 400+ endangered species with SQLAlchemy"
    ],
    "columns": 1,
    "tags": false
  },
  {
    "image": "../logo192.png",
    "title": "Personal Website",
    "subtitles": [
      {
        "subtitle": "Front End",
        "subtitleIcon": <PersonIcon sx={{
          fontSize: "1.375rem",
          color: "#333"
        }} />
      }
    ],
    "startDate": "May 2022",
    "endDate": "Sep 2022",
    "location": "Houston, TX",
    "bullets": [
      "Developed a static website with HTML, CSS, and JavaScript at cs.utexas.edu/~scottlai",
      "Added media queries and alternative media for accessibilty; site is responsive to all screen sizes"
    ],
    "columns": 1,
    "tags": false
  },
  {
    "image": "../logo192.png",
    "title": "File Explorer",
    "subtitles": [
      {
        "subtitle": "Programming & Logistics",
        "subtitleIcon": <PersonIcon sx={{
          fontSize: "1.375rem",
          color: "#333"
        }} />
      }
    ],
    "startDate": "Apr 2022",
    "endDate": "May 2022",
    "location": "Austin, TX",
    "bullets": [
      "Built a user interface to display an EXT2 file system navigable by keyboard input",
      "Organized project info and presented findings; our presentation scored 4.4% higher than the average"
    ],
    "columns": 1,
    "tags": false
  },
  {
    "image": "../logo192.png",
    "title": "Position Predictor",
    "subtitles": [
      {
        "subtitle": "Freshman Research Student",
        "subtitleIcon": <PersonIcon sx={{
          fontSize: "1.375rem",
          color: "#333"
        }} />
      }
    ],
    "startDate": "Apr 2021",
    "endDate": "May 2021",
    "location": "Austin, TX",
    "bullets": [
      "Developed a position prediction algorithm from Azure Kinect depth sensor data",
      "Analyzed results and presented findings in a scientific talk and research paper"
    ],
    "columns": 1,
    "tags": false
  }
];

const Projects = () => {
  return (
    <Box component="section">
      <Typography variant="h2" sx={{
        marginBottom: "1.5rem"
      }}>
        Projects
      </Typography>
      <Grid container spacing={"2.5rem"}>
        {projects.map((project, index) => {
          return (
            <Grid item key={index} xs={12}>
              <CustomCard content={project} flexDirection="row" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Projects;
