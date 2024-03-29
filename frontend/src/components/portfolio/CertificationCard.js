import React from "react";
import GenericCard from "../common/GenericCard";
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  formatDate
} from "../common/timeUtils";

const CertificationCard = ({
  certification
}) => {
  const prepCertification = ((certification) => {
    let newCertification = {
      "image": certification.certificate,
      "title": certification.title,
      "subtitles": [
        {
          "subtitle": certification.issuer,
          "icon": <BusinessIcon />
        },
        {
          "subtitle": formatDate(certification.date),
          "icon": <CalendarMonthIcon />
        }
      ]
    };
    return newCertification;
  });

  return (
    <GenericCard
      data={prepCertification(certification)}
    />
  );
};

export default CertificationCard;
