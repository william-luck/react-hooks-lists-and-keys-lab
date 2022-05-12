import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);


  // I think I'm following here. Not really. 
  // There are nested components to work with. 
  // I'm being passed an array of objects, so I can use the map array iteration 
  // For each element in the array (which is an object), I'm rendering an invidual project item to correspond to each object in the array. 
  // Within each projectItem, I'm setting the key to the id, the name to the name and the about to the about. I can do these because I have been passed an array of objects. 
  const projectList = projects.map(project => {
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
  })


  return (
    <div id="projects">
      <h2>My Projects</h2>
      {/* This is to render the items dynamically, instead of one at a time.  */}
      <div id="project-list">{projectList}</div>
    </div>
  );
}

export default ProjectList;
