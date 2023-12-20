import React from "react";
import GenericCard from "../common/GenericCard";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ProjectCard = ({
  project
}) => {
  const prepProject = ((project) => {
    let newProject = {
      "image": project.screenshot,
      "title": project.name,
      "subtitles": [],
      "actions": [
        {
          "text": "Details",
          "link": "/portfolio"
        }
      ]
    };
    newProject.subtitles.push(
      {
        "subtitle": project.role,
        "icon": <PersonIcon />
      },
      {
        "subtitle": `${project.startDate} - ${project.endDate}`,
        "icon": <CalendarMonthIcon />
      }
    );
    if (project.repo) {
      newProject.actions.push({
        "text": "Repo",
        "link": project.repo
      });
    }
    return newProject;
  });

  return (
    <GenericCard
      data={prepProject(project)}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
        }
      }}
    />
  );
};

export default ProjectCard;
