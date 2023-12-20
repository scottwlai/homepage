import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SourceIcon from '@mui/icons-material/Source';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import TerminalIcon from '@mui/icons-material/Terminal';
import React from "react";
import Section from "./Section";
import MilitaryTech from "@mui/icons-material/MilitaryTech";

const skills = [
  {
    "name": "Java",
    "icon": "code"
  },
  {
    "name": "Python",
    "icon": "code"
  },
  {
    "name": "TypeScript",
    "icon": "code"
  },
  {
    "name": "Swift",
    "icon": "developerMode"
  },
  {
    "name": "React",
    "icon": "source"
  },
  {
    "name": "SQL",
    "icon": "storage"
  },
  {
    "name": "AWS",
    "icon": "cloud"
  },
  {
    "name": "Git",
    "icon": "terminal"
  }
];

const getIcon = (name) => {
  switch (name) {
  case "code": return <CodeIcon />;
  case "developerMode": return <DeveloperModeIcon />
  case "source": return <SourceIcon />
  case "storage": return <StorageIcon />
  case "cloud": return <CloudIcon />
  case "terminal": return <TerminalIcon />
  default: return null;
  }
};

const SkillsSection = () => {
  return (
    <Section
      title="Skills"
      icon={<MilitaryTech />}
      action={{
        "text": "View More",
        "link": "/portfolio"
      }}
    >
      <Card sx={{
        boxShadow: "none"
      }}>
        <CardContent>
          <List sx={{
            columnCount: {
              xs: 2,
              sm: 1
            }
          }}>
            {skills.map((skill, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    {getIcon(skill.icon)}
                  </ListItemIcon>
                  <ListItemText>
                    {skill.name}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Section>
  );
};

export default SkillsSection;
