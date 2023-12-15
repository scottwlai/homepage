import React, {
  useState,
  useEffect
} from "react"
import EducationCard from "./EducationCard";
import {
  getEducation
} from "../../api";

const Education = () => {
  const [ education, setEducation ] = useState([]);

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
  }, []);

  return (
    <>
      {education.map((school, index) => {
        return (
          <EducationCard school={school} key={index} />
        )
      })}
    </>
  );
}

export default Education;
