import React, {
  useState,
  useEffect
} from "react";
import EducationCard from "./EducationCard";
import {
  getEducation
} from "../../api";
import Section from "./Section";
import School from '@mui/icons-material/School';

const Education = () => {
  const [ education, setEducation ] = useState([]);
  const [ sx, setSx ] = useState({});

  useEffect(() => {
    // try to find the education data in the cache
    let cachedData = JSON.parse(localStorage.getItem("education"));
    // function to make the API call
    async function getEducationData() {
      try {
        const response = await getEducation();
        let data = response.data;
        localStorage.setItem("education", JSON.stringify(data));
        setEducation(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (cachedData) {
      console.log("cache HIT! :D");
      setEducation(cachedData);
    } else {
      console.log("cache miss :(");
      getEducationData();
    }
    if (education.length <= 1) {
      setSx({
        boxShadow: "none"
      });
    }
  }, []);

  return (
    <Section
      title="Education"
      icon={<School />}
    >
      {education.map((school, index) => {
        return (
          <EducationCard
            school={school}
            sx={sx}
            key={index}  
          />
        );
      })}
    </Section>
  );
};

export default Education;
