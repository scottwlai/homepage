import React from "react"
import {
  Box, Card, CardContent, Grid, List, ListItem, ListItemText, Typography
} from "@mui/material";

const skills = [
  {
    "type": "Languages",
    "items": [
      "Java",
      "Python",
      "C",
      "C++",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "LaTeX"
    ]
  },
  {
    "type": "Tools",
    "items": [
      "Git",
      "VS Code",
      "Eclipse",
      "Docker",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Neo4j"
    ]
  },
  {
    "type": "Frameworks and Libraries",
    "items": [
      "React",
      "Node",
      "Express",
      "Flask",
      "SQLAlchemy"
    ]
  },
  {
    "type": "Video Editing",
    "items": [
      "Adobe Premiere Pro",
      "Sony Vegas Pro",
      "iMovie"
    ]
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
              <Card component="section" sx={{
                display: "flex",
                flexDirection: "row",
                borderRadius: "1.5rem",
                height: "100%"
              }}>
                <CardContent sx={{
                  p: 6
                }}>
                  <Typography variant="h3">
                    {skill.type}
                  </Typography>
                  <List>
                    {skill.items.map((item, j) => {
                      return (
                        <ListItem key={j} sx={{
                          p: 0
                        }}>
                          <ListItemText primary={item} />
                        </ListItem>
                      );
                    })}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Skills;
