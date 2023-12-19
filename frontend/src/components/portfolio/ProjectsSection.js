import React from "react";
import Section from "./Section";
import DataObjectIcon from '@mui/icons-material/DataObject';
import ProjectCard from "./ProjectCard";

const projects = [
  {
    "screenshot": null,
    "name": "Responsive Web App",
    "role": "Back End",
    "startDate": "Sep 2022",
    "endDate": "Dec 2022",
    "city": "Austin, TX",
    "impact": [
      "Built a dynamic website using React & Flask hosted on AWS to display data on endangered species",
      "Collected & cleaned data from 3 external APIs using Python scripts, resulting in a relational database of 499 unique plants, animals, & states stored across 12 tables",
      "Implemented searching, sorting, & filtering of data using SQLAlchemy, resulting in a RESTful API capable of multiple queries & pagination"
    ]
  },
  {
    "screenshot": null,
    "name": "Responsive Web Page",
    "role": "Front End",
    "startDate": "May 2022",
    "endDate": "Sep 2022",
    "city": "Houston, TX",
    "impact": [
      "Built a personal portfolio using HTML, CSS, & JavaScript hosted at cs.utexas.edu/~scottlai",
      "Achieved cross-platform compatability by writing 2 media queries, providing a comfortable user experience on all screens as small as 375 pixels wide"
    ]
  },
  {
    "screenshot": null,
    "name": "File Explorer Graphical User Interface",
    "role": "Programming & Logistics",
    "startDate": "Apr 2022",
    "endDate": "May 2022",
    "city": "Austin, TX",
    "impact": [
      "Built a user interface to display an EXT2 file system navigable by keyboard input",
      "Compiled the project's progress, results, & demo video into a presentation earning 4.4% higher than the average"
    ]
  },
  {
    "screenshot": null,
    "name": "Position Prediction Algorithm",
    "role": "Freshman Researcher",
    "startDate": "Apr 2021",
    "endDate": "May 2021",
    "city": "Austin, TX",
    "impact": [
      "Coded an algorithm to predict a person's movement using depth sensor data from an Azure Kinect camera",
      "Reduced error by 30% by applying a Kalman filter, allowing for accurate predictions 8 frames into the future"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <Section
      title="Projects"
      icon={<DataObjectIcon />}
    >
      {projects.map((project, index) => {
        return (
          <ProjectCard project={project} key={index}/>
        );
      })}
    </Section>
  );
};

export default ProjectsSection;
