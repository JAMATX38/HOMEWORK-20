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
      name: 'Project 1 Travel Buddy',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com/JAMATX38/TravelBuddyApp.git"
    },
    {
      name: 'Project 2 Sweeper Cleaning App',
      description: 'MERN FULL STACK',
      link: "https://github.com",
      repo: "https://github.com/JAMATX38/Sweepers_Project_Two.git"
    },
    {
      name: 'Workout Tracker',
      description: 'Node/IoT',
      link: "https://jaime-workout-tracker.herokuapp.com/",
      repo: "https://github.com/JAMATX38/HOMEWORK-18.git"
    },
    {
      name: 'Project 3 Inventory Database',
      description: 'React/JavaScript/CSS',
      link: "https://project3-jm.herokuapp.com/",
      repo: "https://github.com/JAMATX38/project3.git"
    },
    {
      name: 'NoteTaker',
      description: 'Express/Node',
      link: "https://notetakerapp-jaime.herokuapp.com/",
      repo: "https://github.com/JAMATX38/NoteTaker.git"
    }
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
