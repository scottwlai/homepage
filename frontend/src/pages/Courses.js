import React, {
  useState
} from "react";
import Button from "@mui/material/Button";
import {
  getCourses
} from "../api";
import CourseList from "../components/CourseList";
import Layout from "../components/Layout";
import {
  Typography
} from "@mui/material";

const Courses = () => {
  const [ courses, setCourses ] = useState([]);

  async function getCoursesData() {
    try {
      const response = await getCourses();
      console.log(response);
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout title="Courses">
      <Typography>Welcome to the courses page!</Typography>
      <Button onClick={getCoursesData} variant="contained">
                Get Courses
      </Button>
      <CourseList courses={courses}></CourseList>
    </Layout>
  );
}

export default Courses;
