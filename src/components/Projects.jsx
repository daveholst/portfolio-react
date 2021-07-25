import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';
// bring in project information
import projectsInfo from '../assets/projectsInfo';

function Projects() {
  return (
    <section id="projects-section">
      <span className="nav-padder" id="projects" />
      <h2>projects.</h2>
      {projectsInfo.map((project) => (
        <ProjectCard key={project.index} cardInfo={project} />
      ))}
    </section>
  );
}

export default Projects;
