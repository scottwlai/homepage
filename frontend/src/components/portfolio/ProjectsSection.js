import React, {
  useState,
  useEffect
} from "react";
import Section from "./Section";
import DataObjectIcon from '@mui/icons-material/DataObject';
import ProjectCard from "./ProjectCard";
import {
  getProjects
} from "../common/api";

const ProjectsSection = () => {
  const cacheKey = "projects_limit:3";
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    // try to find the projects data in the cache
    let cachedData = JSON.parse(localStorage.getItem(cacheKey));
    // function to make the API call
    async function getProjectsData() {
      try {
        const response = await getProjects(3);
        let data = response.data;
        localStorage.setItem(cacheKey, JSON.stringify(data));
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (cachedData) {
      console.log("cache HIT! :D");
      setProjects(cachedData);
    } else {
      console.log("cache miss :(");
      getProjectsData();
    }
  }, []);

  return (
    <Section
      title="Projects"
      icon={<DataObjectIcon />}
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
      {projects.map((project, index) => {
        return (
          <ProjectCard project={project} key={index}/>
        );
      })}
    </Section>
  );
};

export default ProjectsSection;
