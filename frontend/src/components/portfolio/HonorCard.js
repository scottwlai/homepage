import React from "react";
import GenericCard from "../common/GenericCard";
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  formatDate
} from "../common/timeUtils";

const HonorCard = ({
  honor
}) => {
  const prepHonor = ((honor) => {
    let newHonor = {
      "title": honor.name,
      "subtitles": [
        {
          "subtitle": honor.issuer,
          "icon": <BusinessIcon />
        }
      ]
    };
    let date = formatDate(honor.startDate);
    if (honor.endDate) {
      date += ` - ${formatDate(honor.endDate)}`
    }
    newHonor.subtitles.push({
      "subtitle": date,
      "icon": <CalendarMonthIcon />
    });
    return newHonor;
  });

  return (
    <GenericCard
      data={prepHonor(honor)}
    />
  );
};

export default HonorCard;
