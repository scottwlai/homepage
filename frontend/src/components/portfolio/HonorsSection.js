import React, {
  useEffect,
  useState
} from "react";
import Section from "./Section";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HonorCard from "./HonorCard";
import {
  getHonors
} from "../common/api";

const HonorsSection = () => {
  const [ honors, setHonors ] = useState([]);

  useEffect(() => {
    // try to find the honors data in the cache
    let cachedData = JSON.parse(localStorage.getItem("honors"));
    // function to make the API call
    async function getHonorsData() {
      try {
        const response = await getHonors();
        let data = response.data;
        localStorage.setItem("honors", JSON.stringify(data));
        setHonors(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (cachedData) {
      console.log("cache HIT! :D");
      setHonors(cachedData);
    } else {
      console.log("cache miss :(");
      getHonorsData();
    }
  }, []);

  return (
    <Section
      title="Honors"
      icon={<EmojiEventsIcon />}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr"
        },
        gap: {
          xs: "0.25rem",
          sm: "2rem"
        }
      }}
    >
      {honors.map((honor, index) => {
        return (
          <HonorCard honor={honor} key={index} />
        );
      })}
    </Section>
  );
};

export default HonorsSection;
