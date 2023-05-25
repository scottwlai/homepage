import React, {
  useState, useEffect
} from "react"
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from "@mui/material";
import {
  Link
} from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import {
  getCourses
} from "../api";
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
      <CustomCard content={ut} flexDirection="column">
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
                <TableCell>Instructor</TableCell>
                <TableCell>Term</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course, index) => (
                <TableRow
                  key={index}
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
      </CustomCard>
      <Button component={Link} to={"/portfolio/courses"}>
        <Typography variant="button" textTransform="none">
          More Details
        </Typography>
      </Button>
    </Box>
  );
}

export default Education;
