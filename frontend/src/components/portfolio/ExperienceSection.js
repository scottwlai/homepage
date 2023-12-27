import React, {
  useEffect,
  useState
} from "react";
import GenericSection from "../common/GenericSection";
import WorkIcon from '@mui/icons-material/Work';
import ExperienceCard from "./ExperienceCard";
import {
  getExperience
} from "../common/api";

const ExperienceSection = () => {
  const [ experiences, setExperience ] = useState([]);

  useEffect(() => {
    // try to find the experience data in the cache
    let cachedData = JSON.parse(localStorage.getItem("experience"));
    // function to make the API call
    async function getExperienceData() {
      try {
        const response = await getExperience();
        let data = response.data;
        localStorage.setItem("experience", JSON.stringify(data));
        setExperience(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (cachedData) {
      console.log("cache HIT! :D");
      setExperience(cachedData);
    } else {
      console.log("cache miss :(");
      getExperienceData();
    }
  }, []);

  return (
    <GenericSection
      title={experiences.length === 0 ? "" : "Experience"}
      icon={<WorkIcon />}
    >
      {experiences.length === 0 ? (
        <ExperienceCard experience={{}} />
      ) : (
        experiences.map((experience, index) => {
          return (
            <ExperienceCard experience={experience} key={index} />
          );
        })
      )}
    </GenericSection>
  );
};

export default ExperienceSection;
