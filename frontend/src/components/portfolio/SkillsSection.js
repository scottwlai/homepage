import React, {
  useState,
  useEffect
} from "react";
import GenericSection from "../common/GenericSection";
import {
  getIcon
} from "../common/skillsIcons";
import {
  eightItems
} from "../common/placeholderUtils";
import {
  getSkills
} from "../common/api";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton
} from "@mui/material";
import MilitaryTech from "@mui/icons-material/MilitaryTech";

const cacheKey = "skills_category:Main";

// function to make the API call
async function getSkillsData(setSkills) {
  try {
    const response = await getSkills("Main");
    let data = response.data;
    localStorage.setItem(cacheKey, JSON.stringify(data));
    setSkills(data);
  } catch (error) {
    console.error(error);
  }
}

const SkillsSection = () => {
  const [ skills, setSkills ] = useState([]);

  useEffect(() => {
    // try to find the skills data in the cache
    let cachedData = JSON.parse(localStorage.getItem(cacheKey));
    cachedData ? setSkills(cachedData) : getSkillsData(setSkills);
  }, []);

  return (
    <GenericSection
      title={skills.length ? "Skills" : ""}
      icon={<MilitaryTech />}
      action={{
        "text": "View More",
        "link": "/portfolio/skills/#"
      }}
    >
      <Card sx={{ boxShadow: "none" }}>
        <CardContent>
          {skills.length ? (
            skills.map((skill) => (
              <List key={skill.category} sx={{
                columnCount: {
                  xs: 2,
                  sm: 1
                }
              }}>
                {skill.list.map((skill, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      {getIcon(skill.category)}
                    </ListItemIcon>
                    <ListItemText>
                      {skill.name}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            ))
          ) : (
            <List sx={{
              columnCount: {
                xs: 2,
                sm: 1
              }
            }}>
              {eightItems.map((_, index) => (
                <ListItem key={index}>
                  <Skeleton width={150} height={16}/>
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </GenericSection>
  );
};

export default SkillsSection;
