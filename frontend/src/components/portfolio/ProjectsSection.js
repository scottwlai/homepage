import React from "react";
import Section from "./Section";
import DataObjectIcon from '@mui/icons-material/DataObject';
import ProjectCard from "./ProjectCard";

const projects = [
  {
    "screenshot": "https://cs.utexas.edu/~scottlai/images/webapp.jpeg",
    "name": "Responsive Web App",
    "role": "Back End",
    "startDate": "Sep 2022",
    "endDate": "Dec 2022",
    "impact": [
      "Built a dynamic website using React & Flask hosted on AWS to display data on endangered species",
      "Collected & cleaned data from 3 external APIs using Python scripts, resulting in a relational database of 499 unique plants, animals, & states stored across 12 tables",
      "Implemented searching, sorting, & filtering of data using SQLAlchemy, resulting in a RESTful API capable of multiple queries & pagination"
    ],
    "repo": "https://gitlab.com/mrscottwlai/cs373-idb"
  },
  {
    "screenshot": "https://cs.utexas.edu/~scottlai/images/webpage.jpeg",
    "name": "Responsive Web Page",
    "role": "Front End",
    "startDate": "May 2022",
    "endDate": "Sep 2022",
    "impact": [
      "Built a personal portfolio using HTML, CSS, & JavaScript hosted at cs.utexas.edu/~scottlai",
      "Achieved cross-platform compatability by writing 2 media queries, providing a comfortable user experience on all screens as small as 375 pixels wide"
    ],
    "repo": "https://github.com/scottwlai/Personal-Website"
  },
  {
    "screenshot": "https://cs.utexas.edu/~scottlai/images/gui.png",
    "name": "File Explorer Graphical User Interface",
    "role": "Programming & Logistics",
    "startDate": "Apr 2022",
    "endDate": "May 2022",
    "impact": [
      "Built a user interface to display an EXT2 file system navigable by keyboard input",
      "Compiled the project's progress, results, & demo video into a presentation earning 4.4% higher than the average"
    ],
    "repo": "https://github.com/vincentchen913/EXT2.5"
  }
];

const ProjectsSection = () => {
  return (
    <Section
      title="Projects"
      icon={<DataObjectIcon />}
      action={{
        "text": "View More",
        "link": "/portfolio"
      }}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr"
        },
        columnGap: {
          xs: "2rem",
          sm: "2rem"
        }
      }}
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
