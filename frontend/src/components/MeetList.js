import React from "react";
import PropTypes from "prop-types"
import Meet from "./Meet";

const MeetList = ({meets}) => {
  return (
    <div>
      <h3>Meets</h3>
      {meets?.map((meet, j) => {
        return <Meet meet={meet} key={j}></Meet>;
      })}
    </div>
  );
};

MeetList.propTypes = {meets: PropTypes.arrayOf(Meet.propTypes.meet)};

export default MeetList;
