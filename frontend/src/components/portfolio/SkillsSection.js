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
import FolderIcon from '@mui/icons-material/Folder';
import React from "react";
import {
  Link
} from "react-router-dom";

const action = {
  "to": "/portfolio",
  "text": "See More"
}

const skills = [
  "Java",
  "Python",
  "Swift",
  "TypeScript",
  "React",
  "SQL",
  "AWS",
  "Git"
];

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
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText>
                    {skill}
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
