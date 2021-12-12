import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Project 3 Inventory Database',
      description: 'MERN Stack',
      link: "https://project3-jm.herokuapp.com/",
      repo: "https://github.com/JAMATX38/project3.git"
    },
    {
      name: 'pastel-puzzels',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'SWEEPERS PROJECT 2',
      description: 'MERN FULL STACK',
      link: "https://github.com",
      repo: "https://github.com/JAMATX38/Sweepers_Project_Two.git"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'Project 3 Inventory Database',
      description: 'React/JavaScript/CSS',
      link: "https://jamatx38.github.io/HOMEWORK-18/",
      repo: "https://github.com/JAMATX38/HOMEWORK-18.git"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
