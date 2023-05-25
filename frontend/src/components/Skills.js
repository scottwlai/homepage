import React from "react"
import {
  Box, Chip, Grid, Stack, Typography
} from "@mui/material";
import CustomCard from "./CustomCard";

const skills = [
  {
    "image": null,
    "title": "Languages",
    "subtitles": null,
    "startDate": null,
    "endDate": null,
    "location": null,
    "bullets": [
      "Java",
      "Python",
      "C++",
      "LaTeX",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    "columns": 2,
    "tags": true
  },
  {
    "image": null,
    "title": "Tools",
    "subtitles": null,
    "startDate": null,
    "endDate": null,
    "location": null,
    "bullets": [
      "Git",
      "GitHub",
      "GitLab",
      "Visual Studio Code",
      "Eclipse",
      "Docker",
      "AWS Amplify",
      "AWS Elastic Beanstalk",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Neo4j",
      "Microsoft Excel"
    ],
    "columns": 2,
    "tags": true
  },
  {
    "image": null,
    "title": "Frameworks and Libraries",
    "subtitles": null,
    "startDate": null,
    "endDate": null,
    "location": null,
    "bullets": [
      "React",
      "Material UI",
      "Node",
      "Express",
      "Flask",
      "SQLAlchemy"
    ],
    "columns": 2,
    "tags": true
  },
  {
    "image": null,
    "title": "Video Editing",
    "subtitles": null,
    "startDate": null,
    "endDate": null,
    "location": null,
    "bullets": [
      "Adobe Premiere Pro",
      "Sony Vegas Pro",
      "iMovie"
    ],
    "columns": 1,
    "tags": true
  }
]

const Skills = () => {
  return (
    <Box component="section">
      <Typography variant="h2" sx={{
        marginBottom: "1.5rem"
      }}>
        Skills
      </Typography>
      <Grid container spacing={"2.5rem"}>
        {skills.map((skill, index) => {
          return (
            <Grid item key={index} xs={12}>
              <CustomCard content={skill}>
                <Stack flexWrap="wrap" direction="row" sx={{
                  gap: 0.5
                }}>
                  {skill.bullets?.map((bullet, j) => {
                    return (
                      <Chip key={j} variant="outlined" size="small" label={bullet}/>
                    )
                  })}
                </Stack>
              </CustomCard>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Skills;
