import React from "react";
import Section from "./Section";
import VerifiedIcon from '@mui/icons-material/Verified';
import CertificationsCard from "./CertificationsCard";

const certifications = [
  {
    "certificate": "https://cs.utexas.edu/~scottlai/images/react.jpeg",
    "title": "React.js Essential Training",
    "issuer": "LinkedIn Learning",
    "date": "May 2023"
  },
  {
    "certificate": "https://cs.utexas.edu/~scottlai/images/layout-600.png",
    "title": "Responsive Layout",
    "issuer": "LinkedIn Learning",
    "date": "Jul 2022"
  },
  {
    "certificate": "https://cs.utexas.edu/~scottlai/images/git-600.png",
    "title": "Git Essential Training: The Basics",
    "issuer": "LinkedIn Learning",
    "date": "Jun 2022"
  },
]

const CertificationsSection = () => {
  return (
    <Section
      title="Certifications"
      icon={<VerifiedIcon />}
      action={{
        "text": "View More",
        "link": "/portfolio"
      }}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr"
        },
        columnGap: {
          xs: "2rem",
          sm: "2rem"
        }
      }}
    >
      {certifications.map((certification, index) => {
        return (
          <CertificationsCard certification={certification} key={index} />
        );
      })}
    </Section>
  );
};

export default CertificationsSection;
