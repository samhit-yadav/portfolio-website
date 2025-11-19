import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  // --- Backend ---
  
 
  { name: 'Java', icon: 'devicon-java-plain' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain' },
  { name: 'Hibernate', icon: 'devicon-hibernate-plain' },
  { name: 'Spring Data JPA', icon: 'ri-database-2-line' },
  { name: 'JDBC', icon: 'ri-database-2-line' },
  { name: 'REST API', icon: 'ri-exchange-line' },
 
  { name: 'Python', icon: 'devicon-python-plain' },

  // --- Frontend ---
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Redux', icon: 'devicon-redux-original' },

  // --- CS Fundamentals ---
  { name: 'Data Structures', icon: 'ri-node-tree' },
  { name: 'Algorithms', icon: 'ri-code-s-slash-line' },
  { name: 'OOP', icon: 'ri-braces-fill' },

  // --- Databases ---
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
  

  // --- DevOps & Cloud ---
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'Docker', icon: 'devicon-docker-plain' },
  { name: 'Kubernetes', icon: 'devicon-kubernetes-plain' },
  // { name: 'AWS', icon: 'devicon-amazonwebservices-plain' },
  // { name: 'Linux', icon: 'devicon-linux-plain' },
  // { name: 'CI/CD (Jenkins)', icon: 'devicon-jenkins-plain' },

  // --- Testing ---
  // { name: 'JUnit', icon: 'ri-test-tube-line' },
  // { name: 'Jest', icon: 'devicon-jest-plain' },

  // --- Tools & Practices ---
  // { name: 'Figma', icon: 'ri-figma-line' },
  { name: 'SDLC', icon: 'ri-refresh-line' },
  // { name: 'Agile / Scrum', icon: 'ri-team-line' },
];

// We duplicate the skills array to create the seamless scrolling effect
const extendedSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-decorator"></div>
          <p className="section-subtitle">
            The technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          className="skills-slider-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="skills-slider">
            <div className="skills-track">
              {extendedSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <i className={`${skill.icon} skill-icon`}></i>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

