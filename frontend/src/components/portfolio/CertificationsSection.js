import React, {
  useEffect,
  useState
} from "react";
import Section from "./Section";
import VerifiedIcon from '@mui/icons-material/Verified';
import CertificationCard from "./CertificationCard";
import {
  getCertifications
} from "../common/api";

const CertificationsSection = () => {
  const cacheKey = "certifications_limit:3";
  const [ certifications, setCertifications ] = useState([]);

  useEffect(() => {
    // try to find the certifications data in the cache
    let cachedData = JSON.parse(localStorage.getItem(cacheKey));
    // function to make the API call
    async function getCertificationsData() {
      try {
        const response = await getCertifications(3);
        let data = response.data;
        localStorage.setItem(cacheKey, JSON.stringify(data));
        setCertifications(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (cachedData) {
      console.log("cache HIT! :D");
      setCertifications(cachedData);
    } else {
      console.log("cache miss :(");
      getCertificationsData();
    }
  }, []);

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
          <CertificationCard certification={certification} key={index} />
        );
      })}
    </Section>
  );
};

export default CertificationsSection;
