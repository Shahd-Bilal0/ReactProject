import React from "react";
import "./App.css";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import projectsData from "../projects.json";
const App = () => {
  return (
    <div>
      {projectsData.projects.map((project, index) => (
        <ProjectCard key={index} data={project} />
      ))}
    </div>
  );
};
export default App;
