import React, { useState } from "react";
import Button from "@mui/material/Button";
import { getCourses } from "./api";
import CourseList from "./components/CourseList";

function App() {
  const [courses, setCourses] = useState([]);

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
    <div>
      <Button onClick={getCoursesData} variant="contained">
        Get Courses
      </Button>
      <CourseList courses={courses}></CourseList>
    </div>
  );
}

export default App;
