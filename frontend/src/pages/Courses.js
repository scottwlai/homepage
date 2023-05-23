import React, {
  useState, useEffect
} from "react"
import Layout from "../components/Layout";
import {
  Button,
  Grid,
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
import {
  getCourses
} from "../api";

const Courses = () => {
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
    <Layout title="Courses">
      <Grid item xs={12}>
        <Button component={Link} to={"/portfolio"}>
          <Typography variant="button" textTransform="none">
            Back to Portfolio
          </Typography>
        </Button>
        <TableContainer>
          <Table aria-label="simple table" sx={{
            minWidth: "100%"
          }}>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Instructor</TableCell>
                <TableCell>Term</TableCell>
                <TableCell>Grade</TableCell>
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
                    {course.courseNumber.department} {course.courseNumber.number}
                  </TableCell>
                  <TableCell>
                    {course.name}
                  </TableCell>
                  <TableCell>{course.instructors.join(" & ")}</TableCell>
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
      </Grid>
    </Layout>
  );
}

export default Courses;
