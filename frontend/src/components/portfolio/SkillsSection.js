import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton
} from "@mui/material";
import DataObjectIcon from '@mui/icons-material/DataObject';
import SourceIcon from '@mui/icons-material/Source';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import TerminalIcon from '@mui/icons-material/Terminal';
import React, {
  useState,
  useEffect
} from "react";
import GenericSection from "../common/GenericSection";
import MilitaryTech from "@mui/icons-material/MilitaryTech";
import {
  getSkills
} from "../common/api";
import {
  eightItems
} from "../common/placeholderUtils";

const getIcon = (name) => {
  switch (name) {
  case "Programming Languages": return <DataObjectIcon />
  case "Frameworks / Libraries": return <SourceIcon />
  case "Database": return <StorageIcon />
  case "Cloud": return <CloudIcon />
  case "Tools": return <TerminalIcon />
  default: return null;
  }
};

const SkillsSection = () => {
  const cacheKey = "skills_category:Main";
  const [ skills, setSkills ] = useState([]);

  useEffect(() => {
    // try to find the skills data in the cache
    let cachedData = JSON.parse(localStorage.getItem(cacheKey));
    // function to make the API call
    async function getSkillsData() {
      try {
        const response = await getSkills("Main");
        let data = response.data;
        localStorage.setItem(cacheKey, JSON.stringify(data));
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
    <GenericSection
      title={skills.length === 0 ? "" : "Skills"}
      icon={<MilitaryTech />}
      action={{
        "text": "View More",
        "link": "/portfolio/skills/#"
      }}
    >
      <Card sx={{
        boxShadow: "none"
      }}>
        <CardContent>
          {skills.length === 0 ? (
            <List sx={{
              columnCount: {
                xs: 2,
                sm: 1
              }
            }}>
              {eightItems.map((_, index) => {
                return (
                  <ListItem key={index}>
                    <Skeleton width={150} height={16}/>
                  </ListItem>
                );
              })}
            </List>
          ) : (
            skills.map((skill) => {
              return (
                <List key={skill.category} sx={{
                  columnCount: {
                    xs: 2,
                    sm: 1
                  }
                }}>
                  {skill.list.map((skill, index) => {
                    return (
                      <ListItem key={index}>
                        <ListItemIcon>
                          {getIcon(skill.category)}
                        </ListItemIcon>
                        <ListItemText>
                          {skill.name}
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              );
            })
          )}
        </CardContent>
      </Card>
    </GenericSection>
  );
};

export default SkillsSection;
