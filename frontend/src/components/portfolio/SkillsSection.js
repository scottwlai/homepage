import {
  Button,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SourceIcon from '@mui/icons-material/Source';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import TerminalIcon from '@mui/icons-material/Terminal';
import React from "react";
import {
  Link
} from "react-router-dom";

const action = {
  "to": "/portfolio",
  "text": "See More"
}

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
    case "code":
      return <CodeIcon />;
    case "developerMode":
      return <DeveloperModeIcon />
    case "source":
      return <SourceIcon />
    case "storage":
      return <StorageIcon />
    case "cloud":
      return <CloudIcon />
    case "terminal":
      return <TerminalIcon />
    default:
      return null;
  }
};

const SkillsSection = () => {
  return (
    <>
      <Typography variant="h2">
        Skills
      </Typography>
      <Card>
        <CardContent>
          <List>
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
        <CardActions>
          <Button component={Link} to={action.to}>
            <Typography variant="button">
              {action.text}
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default SkillsSection;
