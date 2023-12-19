import React from "react";
import GenericCard from "../common/GenericCard";
import HistoryEdu from "@mui/icons-material/HistoryEdu";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const action = {
  "to": "/portfolio",
  "text": "More Info"
}

const ProjectCard = ({
  project
}) => {
  const prepProject = ((project) => {
    let newProject = {
      "image": project.screenshot,
      "title": project.name,
      "subtitles": []
    };
    newProject.subtitles.push(
      {
        "subtitle": project.role,
        "icon": <PersonIcon />
      },
      {
        "subtitle": `${project.startDate} - ${project.endDate}`,
        "icon": <CalendarMonthIcon />
      },
      {
        "subtitle": project.city,
        "icon": <PlaceIcon />
      }
    );
    project.impact.map((bullet) => {
      newProject.subtitles.push({
        "subtitle": bullet,
        "icon": <ArrowRightIcon />
      })
    });
    return newProject;
  });

  return (
    <GenericCard data={prepProject(project)} action={action} />
  );
};

export default ProjectCard;
