import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    title: "Industrial Trainee",
    company: "Rashtriya Ispat Nigam Limited (Vizag Steel Plant)",
    location: "Visakhapatnam",
    period: "Summer 2023",
    description: "Developed hands-on expertise in industrial hydraulic systems by analyzing core components, including lubrication mechanisms, pressure selection, and filtration technologies.",

    technologies: ["CNC", "Welding","Steel Manufacturing"],
    link: "https://drive.google.com/file/d/1I5P0cBKPpGnhvOHKLYNsSo3Ce3NMu1zu/view?usp=sharing"
  },
  
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="section-decorator"></div>
          <p className="section-subtitle">
            My professional journey and academic experiences.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(6,182,212,0.2)' }}
            >
              <div className="experience-header">
                <div className="experience-title-company">
                  <h3 className="experience-title">{exp.title}</h3>
                  <a href={exp.link} className="experience-company" target="_blank" rel="noopener noreferrer">
                    <span>{exp.company}</span>
                    {exp.link !== "#" && <i className="ri-external-link-line"></i>}
                  </a>
                </div>
                <div className="experience-meta">
                  <div className="meta-item">
                    <i className="ri-calendar-2-line"></i><span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <i className="ri-map-pin-2-line"></i><span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-tags">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="experience-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

