import React from "react";
import PropTypes from "prop-types"
import MeetList from "./MeetList";

const Course = ({
  course
}) => {
  const c = course.courseNumber;
  let courseTitle = c.department + " " + c.number + ": " + course.name;
  if (course.nickname) {
    courseTitle += " (" + course.nickname + ")";
  }
  return (
    <div>
      <h1>
        {courseTitle}
      </h1>
      <h2>{course.instructors.join(" & ")}</h2>
      <h3>{course.term.semester} {course.term.year}</h3>
      <MeetList meets={course.meets}></MeetList>
      <h3>Misc.</h3>
      <p>Grade: {course.grade}</p>
      <p>Unique Number: {course.uniqueNumber}</p>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    courseNumber: PropTypes.shape({
      department: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string,
    instructors: PropTypes.arrayOf(PropTypes.string).isRequired,
    term: PropTypes.shape({
      semester: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired
    }).isRequired,
    meets: PropTypes.arrayOf(PropTypes.shape({
      days: PropTypes.arrayOf(PropTypes.string).isRequired,
      startTime: PropTypes.number,
      endTime: PropTypes.number,
      room: PropTypes.shape({
        building: PropTypes.string,
        number: PropTypes.string
      }).isRequired
    })),
    grade: PropTypes.string,
    uniqueNumber: PropTypes.string.isRequired
  }).isRequired
};

export default Course;
