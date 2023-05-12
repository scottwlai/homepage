import React, { useState } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";

function App() {
  const [courses, setCourses] = useState([]);

  const getCourses = () => {
    Axios.get("https://api.scottlai.tech/courses").then(
      (response) => {
        console.log(response);
        setCourses(response.data);
      }
    );
  };

  return (
    <div className="App">
      <Button onClick={getCourses} variant="contained">
        Get Courses
      </Button>
    </div>
  );
}

export default App;
