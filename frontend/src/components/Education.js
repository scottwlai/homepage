import React from "react"
import {
  Box, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Typography
} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';

const schools = [
  {
    "name": "University of Texas at Austin",
    "degrees": [
      "B.S. Computer Science",
      "Business Minor"
    ],
    "gpa": 3.6542,
    "startDate": "Aug 2020",
    "endDate": "May 2024",
    "location": "Austin, TX"
  }
]

const Education = () => {
  return (
    <Box component="section">
      <Typography variant="h2" sx={{
        marginBottom: "1.5rem"
      }}>
        Education
      </Typography>
      <Grid container spacing={"2.5rem"}>
        {schools.map((school, index) => {
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
                    {school.name}
                  </Typography>
                  <List>
                    {school.degrees.map((degree, j) => {
                      return (
                        <ListItem key={j} sx={{
                          p: 0
                        }}>
                          <ListItemIcon sx={{
                            display: "flex",
                            justifyContent: "center",
                            minWidth: "3rem"
                          }}>
                            <SchoolIcon sx={{
                              fontSize: "1.375rem",
                              color: "#333"
                            }} />
                          </ListItemIcon>
                          <ListItemText primary={degree} />
                        </ListItem>
                      );
                    })}
                    <ListItem sx={{
                      p: 0
                    }}>
                      <ListItemIcon sx={{
                        display: "flex",
                        justifyContent: "center",
                        minWidth: "3rem"
                      }}>
                        <MilitaryTechIcon sx={{
                          fontSize: "1.375rem",
                          color: "#333"
                        }} />
                      </ListItemIcon>
                      <ListItemText primary={school.gpa} />
                    </ListItem>
                    <ListItem sx={{
                      p: 0
                    }}>
                      <ListItemIcon sx={{
                        display: "flex",
                        justifyContent: "center",
                        minWidth: "3rem"
                      }}>
                        <CalendarMonthIcon sx={{
                          fontSize: "1.375rem",
                          color: "#333"
                        }} />
                      </ListItemIcon>
                      <ListItemText primary={school.startDate + " - " + school.endDate} />
                    </ListItem>
                    <ListItem sx={{
                      p: 0
                    }}>
                      <ListItemIcon sx={{
                        display: "flex",
                        justifyContent: "center",
                        minWidth: "3rem"
                      }}>
                        <PlaceIcon sx={{
                          fontSize: "1.375rem",
                          color: "#333"
                        }} />
                      </ListItemIcon>
                      <ListItemText primary={school.location} />
                    </ListItem>
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

export default Education;
