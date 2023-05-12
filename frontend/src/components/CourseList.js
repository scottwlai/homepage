import React from "react";
import PropTypes from "prop-types"
import Course from "./Course";

const CourseList = ({ courses }) => {
    return (
        <div>
            {courses?.map((course, i) => {
                return <Course key={i} course={course}></Course>;
            })}
        </div>
    );
};

CourseList.propTypes = {
    courses: PropTypes.arrayOf(Course.propTypes.course).isRequired
};

export default CourseList;
