import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

import {useNavigate} from 'react-router-dom';
import projects from '../../data/projects';


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Projects() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-decorator"></div>
          <p className="section-subtitle">A collection of work demonstrating creativity, engineering, and problem-solving.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />

                {project.featured && (
                  <div className="project-featured-badge">
                    <i className="ri-star-fill"></i> Featured
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <i className="ri-external-link-line"></i> Live
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <i className="ri-github-fill"></i> Code
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <div className='view-more-container'>
          <button 
          onClick={handleClick} className='view-more-btn'
          >View More</button>
        </div>
      </div>
    </section>
  );
}
