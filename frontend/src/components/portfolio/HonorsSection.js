import React, {
  useEffect,
  useState
} from "react";
import GenericSection from "../common/GenericSection";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HonorCard from "./HonorCard";
import {
  getHonors
} from "../common/api";
import {
  Skeleton
} from "@mui/material";
import {
  twoItems
} from "../common/placeholderUtils";

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
    <GenericSection
      title={honors.length === 0 ? "" : "Honors"}
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
      {honors.length === 0 ? (
        twoItems.map((_, index) => {
          return (
            <Skeleton key={index}>
              <HonorCard
                honor={{}}
              />
            </Skeleton>
          );
        })
      ) : (
        honors.map((honor, index) => {
          return (
            <HonorCard honor={honor} key={index} />
          );
        })
      )}
    </GenericSection>
  );
};

export default HonorsSection;
