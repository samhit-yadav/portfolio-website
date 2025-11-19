import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

import fluxkart from '../../assets/fluxkart.png'
import algoVision from '../../assets/dsaVis.png'
import vmi from '../../assets/vmi.png'
import residesk from '../../assets/residesk.png'

const projects = [
  {
    title: "Apartment Issue Resolution Platform",
    description: "A role-based web platform that improved issue resolution time by 30%. Engineered with image uploads, a voting system, and automated categorization.",
    image: `${residesk}`,
    technologies: ["React.js", "Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
    {
    title: "Sorting Algorithm Visualizer",
    description: "An interactive and responsive React application that enhances learning for students through real-time animation of sorting algorithms. Features include adjustable speed and array size parameters.",
    image: `${algoVision}`,
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "HTML"],
    liveUrl: "https://sorting-visualizer-react-omega.vercel.app/",
    githubUrl: "https://github.com/samhit-yadav/Sorting-Algorithm-Visualizer-React",
    featured: true
  },
  {
    title: "Vendor Managed Inventory (VMI) System",
    description: "Optimized inventory operations to reduce stockouts by 35% and costs by 20% using EOQ modeling. Automated key workflows like vendor onboarding and real-time tracking, cutting manual processing by 50%.",
    image: `${vmi}`,
    technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL", "REST APIs"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "FluxKart Contact Identification Service",
    description: "A backend service that reduces contact data redundancy by 40% using graph traversal algorithms. Features secure REST endpoints with precedence logic for seamless contact synchronization.",
    image: `${fluxkart}`,
    technologies: ["Java", "Spring Boot","React.js", "REST APIs"],
    liveUrl: "https://fluxkart-frontend.vercel.app/",
    githubUrl: "https://github.com/samhit-yadav/fluxkart-backend",
    featured: false
  },

];
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Projects() {
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
          <p className="section-subtitle">
            My work in web development and real-time applications.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card-wrapper ${project.featured ? 'featured' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="project-card"
                whileHover={{ rotateY: 8, rotateX: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  {project.featured && (
                    <div className="project-featured-badge">
                      <i className="ri-star-fill"></i> Featured
                    </div>
                  )}
                  <div className="project-links-overlay">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-button">
                      <i className="ri-external-link-line"></i>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-button">
                      <i className="ri-github-fill"></i>
                    </a>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

