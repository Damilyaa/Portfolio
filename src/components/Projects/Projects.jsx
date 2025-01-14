import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import me from '../img/me.jpeg'; 
import portfolio from '../img/portfolio.png'; 


const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'This is my Portfolio Website',
    link: '#',
    image: portfolio, 
  },
  {
    title: 'To Do App',
    description: 'Simple To Do App',
    link: 'https://github.com/Damilyaa/To-Do-App/tree/main',
    image: portfolio,
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h3 className="projects-title">My Projects</h3>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">View</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;