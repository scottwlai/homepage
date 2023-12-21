import React from "react";
import GenericCard from "../common/GenericCard";
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
    let date = honor.startDate;
    if (honor.endDate) {
      date += ` - ${honor.endDate}`
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
