import React from "react";
import GenericCard from "../common/GenericCard";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  formatDate
} from "../common/timeUtils";

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
          "text": "More Info"
        }
      ],
      "info": project.impact
    };
    newProject.subtitles.push(
      {
        "subtitle": project.role,
        "icon": <PersonIcon />
      },
      {
        "subtitle": `${formatDate(project.startDate)} - ${formatDate(project.endDate)}`,
        "icon": <CalendarMonthIcon />
      },
      {
        "subtitle": project.summary,
        "icon": <ArrowRightIcon />
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
    />
  );
};

export default ProjectCard;
