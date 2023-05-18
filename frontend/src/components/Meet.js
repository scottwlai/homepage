import React from "react";
import PropTypes from "prop-types"
import formatTime from "../timeUtils";

const Meet = ({
  meet
}) => {
  let meetData = [ meet.days.join("") ];
  if (meet.startTime) {
    meetData.push(formatTime(meet.startTime) + " - " + formatTime(meet.endTime));
  }
  if (meet.room.building && meet.room.number) {
    meetData.push(meet.room.building + " " + meet.room.number);
  } else if (meet.room.building) {
    meetData.push(meet.room.building);
  }
  return <p>{meetData.join(", ")}</p>;
};

Meet.propTypes = {
  meets: PropTypes.shape({
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    room: PropTypes.shape({
      building: PropTypes.string,
      number: PropTypes.string
    }).isRequired
  })
};

export default Meet;
