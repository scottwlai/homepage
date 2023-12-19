import React from "react";
import Section from "./Section";
import {
  Typography
} from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';

const CertificationsSection = () => {
  return (
    <Section
      title="Certifications"
      icon={<VerifiedIcon />}
    >
      <Typography>
        3 of them
      </Typography>
    </Section>
  );
};

export default CertificationsSection;
