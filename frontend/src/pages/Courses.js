import React, {useState} from "react";
import Button from "@mui/material/Button";
import {getCourses} from "../api";
import CourseList from "../components/CourseList";

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
    <>
      <h1>Courses Page</h1>
      <p>Welcome to the courses page!</p>
      <Button onClick={getCoursesData} variant="contained">
                Get Courses
      </Button>
      <CourseList courses={courses}></CourseList>
    </>
  );
}

export default Courses;
