import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';
// bring in project information
import projectsInfo from '../assets/projectsInfo';

// const projectsContainerStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
//   gridTemplateRows: `repeat(${projectsInfo.length}, minmax(0, 1fr))`,
//   margin: '0px -5px',
// };

function Projects(props) {
  return <ProjectCard cardInfo={projectsInfo[0]} />;
}

export default Projects;
