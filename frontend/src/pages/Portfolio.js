import React from "react";
import Layout from "../components/Layout";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <Box>
        <Typography variant="h2">
          Education
        </Typography>
        <Typography variant="h3">
          University of Texas at Austin
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="B.S. Computer Science" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Business Minor" />
          </ListItem>
          <ListItem>
            <ListItemText primary="3.6542 GPA" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Aug 2020 - May 2024" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Austin, TX" />
          </ListItem>
        </List>
        <Typography variant="h4">
          Coursework
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Intro Programming" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Data Structures" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Computer Architecture" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Operating Systems" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Software Engineering" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Prin. of Machine Learning" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Autonomous Robots" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Progamming for Performance" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Multivariable Calculus" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Discrete Math" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Probability & Stats" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Linear Algebra" />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography variant="h2">
          Skills
        </Typography>
        <Typography variant="h3">
          Languages
        </Typography>
        <Typography variant="h4">
          Experienced
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Java" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Python" />
          </ListItem>
          <ListItem>
            <ListItemText primary="C" />
          </ListItem>
          <ListItem>
            <ListItemText primary="C++" />
          </ListItem>
          <ListItem>
            <ListItemText primary="HTML" />
          </ListItem>
          <ListItem>
            <ListItemText primary="CSS" />
          </ListItem>
        </List>
        <Typography variant="h4">
          Familiar
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="JavaScript" />
          </ListItem>
          <ListItem>
            <ListItemText primary="SQL" />
          </ListItem>
          <ListItem>
            <ListItemText primary="LaTeX" />
          </ListItem>
        </List>
        <Typography variant="h3">
          Tools
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="React" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Flask" />
          </ListItem>
          <ListItem>
            <ListItemText primary="PostgreSQL" />
          </ListItem>
          <ListItem>
            <ListItemText primary="SQLAlchemy" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Git" />
          </ListItem>
          <ListItem>
            <ListItemText primary="VS Code" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Eclipse" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Docker" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Adobe Premiere Pro" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sony Vegas Pro" />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography variant="h2">
          Projects
        </Typography>
        <Typography variant="h3">
          Internet Database
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Full-Stack" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sep 2022 - Dec 2022" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Austin, TX" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText primary="Developed a dynamic website with a RESTful API & SQL database
              back-end" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Implemented back-end searching, sorting, & filtering of data
              using SQL queries" />
          </ListItem>
        </List>
        <Typography variant="h3">
          Personal Website
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Front-End" />
          </ListItem>
          <ListItem>
            <ListItemText primary="May 2022 - Sep 2022" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Houston, TX" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText primary="Created a student homepage using HTML, CSS, & JavaScript on the
              cs.utexas.edu domain" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Added media queries & alternative media for accessibilty; site
              is responsive to all devices" />
          </ListItem>
        </List>
        <Typography variant="h3">
          File Explorer
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Programming & Logistics" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Apr 2022 - May 2022" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Austin, TX" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText primary="Built a user interface to display an EXT2 file system navigable
              by keyboard input" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Organized project information & presented findings; our
              presentation scored 4.4% higher than the class average" />
          </ListItem>
        </List>
        <Typography variant="h3">
          Position Predictor
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="UT Austin Freshman Research Initiative Student" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Apr 2021 - May 2021" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Austin, TX" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText primary="Developed a position prediction algorithm for data captured
              using an Azure Kinect DK depth sensor; analyzed results to calculate error & assess
              the accuracy of future algorithms" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Presented findings in brief scientific talk & reserach paper" />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography variant="h2">
          Certifications
        </Typography>
        <Typography variant="h3">
          HTML Essential Training
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="LinkedIn Learning" />
          </ListItem>
          <ListItem>
            <ListItemText primary="May 2022" />
          </ListItem>
        </List>
        <Typography variant="h3">
          CSS Essential Training
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="LinkedIn Learning" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Jun 2022" />
          </ListItem>
        </List>
        <Typography variant="h3">
          JavaScript Essential Training
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="LinkedIn Learning" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Jun 2022" />
          </ListItem>
        </List>
        <Typography variant="h3">
          Git Essential Training: The Basics
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="LinkedIn Learning" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Jun 2022" />
          </ListItem>
        </List>
        <Typography variant="h3">
          Responsive Layout
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="LinkedIn Learning" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Jul 2022" />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography variant="h2">
          Experience
        </Typography>
        <Typography variant="h3">
          Student Lab Assistant
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="UT Austin School of Nursing, Simulation & Skills Center" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sep 2020 - Dec 2020" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Austin, TX" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText primary="Prepared lab equipment for daily simulations; all classes began
              equipped & on time" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Organized supply room; all equipment requests met on demand
              with 100% accuracy" />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography variant="h2">
          Honors
        </Typography>
        <Typography variant="h3">
          University Honors
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="UT Austin" />
          </ListItem>
          <ListItem>
            <ListItemText primary="2020 - 2022" />
          </ListItem>
        </List>
        <Typography variant="h3">
        Rodeo Scholar
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Houston Livestock Show & Rodeo" />
          </ListItem>
          <ListItem>
            <ListItemText primary="2020" />
          </ListItem>
        </List>
      </Box>
    </Layout>
  );
}

export default Portfolio;
