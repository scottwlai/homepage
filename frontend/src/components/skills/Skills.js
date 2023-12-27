import React, {
  useState,
  useEffect
} from "react";
import Wrapper from "../common/Wrapper";
import Title from "../common/Title";
import GenericSection from "../common/GenericSection";
import Chips from "../common/Chips";
import LinkButton from "../common/LinkButton";
import {
  getIcon
} from "../common/skillsIcons";
import {
  getSkills
} from "../common/api";
import {
  Breadcrumbs
} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const cacheKey = "skills";

// function to make the API call
async function getSkillsData(setSkills) {
  try {
    const response = await getSkills();
    let data = response.data;
    localStorage.setItem(cacheKey, JSON.stringify(data));
    setSkills(data);
  } catch (error) {
    console.error(error);
  }
}

const Skills = () => {
  const [ skills, setSkills ] = useState([]);

  useEffect(() => {
    // try to find the skills data in the cache
    let cachedData = JSON.parse(localStorage.getItem(cacheKey));
    cachedData ? setSkills(cachedData) : getSkillsData(setSkills);
  }, []);

  return (
    <main>
      <Wrapper>
        <Title>
          Skills
        </Title>
        <Breadcrumbs separator={<ChevronRightIcon />}>
          <LinkButton link="/portfolio/#" variant="text">
            Portfolio
          </LinkButton>
          <LinkButton link="/portfolio/skills/#" variant="text">
            Skills
          </LinkButton>
        </Breadcrumbs>
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
        {skills.map((skill) => (
          skill.category != "Main" && (
            <GenericSection
              title={skill.category}
              icon={getIcon(skill.category)}
              containerSx={{
                width: "100%",
                gridArea: skill.category.substring(0, 3).toLowerCase()
              }}
              key={skill.category}
            >
              <Chips data={skill.list} />
            </GenericSection>
          )
        ))}
      </Wrapper>
    </main>
  )
};

export default Skills;
