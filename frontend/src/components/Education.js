import React, {
  useState, useEffect
} from "react"
import {
  Box, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText,
  Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography
} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import {
  getCourses
} from "../api";

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
];

const Education = () => {
  const [ courses, setCourses ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ perPage, setPerPage ] = useState(10);
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    let cachedData = JSON.parse(localStorage.getItem(getCacheKey()));

    async function getCoursesData() {
      try {
        const response = await getCourses(currentPage, perPage);
        console.log("made API call for page:", currentPage, "perPage:", perPage);
        let data = response.data;
        localStorage.setItem(getCacheKey(), JSON.stringify(data));
        setCourses(data["courses"]);
        setCurrentPage(data["page"]);
        setPerPage(data["pageSize"]);
        setCount(data["total"]);
      } catch (error) {
        console.error(error);
      }
    }
    // cachedData = null;
    if (cachedData) {
      console.log("cache HIT! :D");
      setCourses(cachedData["courses"]);
      setCurrentPage(cachedData["page"]);
      setPerPage(cachedData["pageSize"]);
      setCount(cachedData["total"]);
    } else {
      console.log("cache miss :(");
      getCoursesData();
    }
  }, [ currentPage, perPage ]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage + 1);
  };

  const handlePerPageChange = (event) => {
    const newPerPage = parseInt(event.target.value);
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

  const getCacheKey = () => {
    return `page:${currentPage}_perPage:${perPage}`;
  };

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
                  <Typography variant="h4">
                    Coursework
                  </Typography>
                  <TableContainer>
                    <Table aria-label="simple table" sx={{
                      minWidth: "100%"
                    }}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Instructor(s)</TableCell>
                          <TableCell>Term</TableCell>
                          <TableCell>Grade</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {courses.map((course, j) => (
                          <TableRow
                            key={j}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0
                              }
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {course.courseNumber.department + " "}
                              {course.courseNumber.number + ": "}
                              {course.nickname ? course.nickname : course.name}
                            </TableCell>
                            <TableCell>{course.instructors[0]}</TableCell>
                            <TableCell>{course.term.semester + " " + course.term.year}</TableCell>
                            <TableCell>{course.grade}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    component="div"
                    count={count}
                    page={currentPage - 1}
                    onPageChange={handlePageChange}
                    rowsPerPage={perPage}
                    onRowsPerPageChange={handlePerPageChange}
                    rowsPerPageOptions={[ 10, 20, 30 ]}
                  />
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
