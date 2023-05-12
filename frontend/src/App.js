import React, { useState } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import { format } from "date-fns";

function formatTime(time) {
  return format(new Date(time), "h:mm a");
}

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
    <div>
      <Button onClick={getCourses} variant="contained">
        Get Courses
      </Button>
      {courses?.map((course, i) => {
        return (
          <div key={i}>
            <h1>
              {course.courseNumber.department} {course.courseNumber.number}: {course.name} {course.nickname ? "(" + course.nickname + ")" : ""}
            </h1>
            <h2>{course.instructors.join(" & ")}</h2>
            <h3>{course.term.semester} {course.term.year}</h3>
            <h3>Meets</h3>
            {course.meets?.map((meet, j) => {
              var meetData = [meet.days.join("")];
              if (meet.startTime) {
                meetData.push(formatTime(meet.startTime) + " - " + formatTime(meet.endTime));
              }
              if (meet.room.building && meet.room.number) {
                meetData.push(meet.room.building + " " + meet.room.number);
              } else if (meet.room.building) {
                meetData.push(meet.room.building);
              }
              return (
                <div key={j}>
                  <p>
                    {meetData.join(", ")}
                  </p>
                </div>
              );
            })}
            <h3>Misc.</h3>
            <p>Grade: {course.grade}</p>
            <p>Unique Number: {course.uniqueNumber}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
