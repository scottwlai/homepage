import React, {
  useState,
  useEffect
} from "react";
import Wrapper from "../common/Wrapper";
import Title from "../common/Title";
import GenericSection from "../common/GenericSection";
import {
  getSkills
} from "../common/api";
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SourceIcon from "@mui/icons-material/Source";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import TerminalIcon from "@mui/icons-material/Terminal";
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import Chips from "../common/Chips";

const getIcon = (name) => {
  switch (name) {
  case "Programming Languages": return <DataObjectIcon />
  case "Other Languages": return <CodeIcon />
  case "Frameworks / Libraries": return <SourceIcon />
  case "Database": return <StorageIcon />
  case "Cloud": return <CloudIcon />
  case "Tools": return <TerminalIcon />
  case "Digital Media Production": return <VideoCameraBackIcon />
  default: return null;
  }
};

const Skills = () => {
  const [ skills, setSkills ] = useState([]);

  useEffect(() => {
    // try to find the skills data in the cache
    let cachedData = JSON.parse(localStorage.getItem("skills"));
    // function to make the API call
    async function getSkillsData() {
      try {
        const response = await getSkills();
        let data = response.data;
        localStorage.setItem("skills", JSON.stringify(data));
        setSkills(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (cachedData) {
      console.log("cache HIT! :D");
      setSkills(cachedData);
    } else {
      console.log("cache miss :(");
      getSkillsData();
    }
  }, []);

  return (
    <main>
      <Wrapper>
        <Title>
          Skills
        </Title>
      </Wrapper>
      <Wrapper sx={{
        gap: "1rem",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "9fr 1fr 8fr",
          md: "4fr 3fr 3fr"
        },
        gridTemplateAreas: {
          xs: `
            "pro"\n
            "clo"\n
            "oth"\n
            "dat"\n
            "too"\n
            "fra"\n
            "dig"
          `,
          sm: `
            "pro pro fra"\n
            "clo clo fra"\n
            "clo clo oth"\n
            "dat too too"\n
            "dig dig dig"
          `,
          md: `
            "pro pro dat"\n
            "clo clo dat"\n
            "clo clo too"\n
            "oth oth too"\n
            "fra dig dig"
          `
        }
      }}>
        {skills.map((skill) => {
          return (
            skill.category === "Main" ? (
              <React.Fragment key={skill.category} />
            ) : (
              <GenericSection
                title={skill.category}
                icon={getIcon(skill.category)}
                containerSx={{
                  width: "100%",
                  gridArea: skill.category.substring(0, 3).toLowerCase()
                }}
              >
                <Chips data={skill.list} />
              </GenericSection>
            )
          );
        })}
      </Wrapper>
    </main>
  )
};

export default Skills;
