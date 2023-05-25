import React, {
  useState, useEffect
} from "react"
import Layout from "../components/Layout";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography
} from "@mui/material";
import {
  Link
} from "react-router-dom";
import {
  getCourses
} from "../api";
import CourseCard from "../components/CourseCard";

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
    setCurrentPage(newPage);
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
        <Pagination
          count={Math.ceil(count / perPage)}
          onChange={handlePageChange}
          page={currentPage}
          showFirstButton
          showLastButton
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        />
        <FormControl fullWidth>
          <InputLabel
            id="per-page-label"
          >
            Results per Page
          </InputLabel>
          <Select
            labelId="per-page-label"
            id="per-page-select"
            label="Results per Page"
            defaultValue={10}
            onChange={handlePerPageChange}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={4}>
          {courses.map((course, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12} sm={6} md={4} lg={3}
              >
                <CourseCard
                  name={course.nickname ? course.nickname : course.name}
                  courseNumber={course.courseNumber}
                  instructors={course.instructors}
                  term={course.term}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Courses;
