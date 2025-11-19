import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

import spring from '../../assets/spring.png';
import python from '../../assets/python.png';
import dsa from '../../assets/dsa.png';


const certificationsList = [
  {
    title: "Java Spring Framework 6 and Spring Boot 3 with Spring AI, Docker, Microservices",
    category: "Java Developer",
    image: `${spring}`,
    link: "https://drive.google.com/drive/folders/1osI36XYhrbmzXj1KRSrejKgQF-l3Uz1J"
  },
  {
    title: "The Joy of Computing using Python",
    category: "Python",
    image: `${python}`,
    link: "https://drive.google.com/drive/folders/1osI36XYhrbmzXj1KRSrejKgQF-l3Uz1J"
  },
  {
    title: "Data Structures and Algorithms from CodeHelp",
    category: "Data Structures and Algorithms",
    image: `${dsa}`,
    link: "https://drive.google.com/drive/folders/1osI36XYhrbmzXj1KRSrejKgQF-l3Uz1J"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

// Renamed component from Blog to Certifications
export default function Certifications() {
  return (
    // Changed section id from "blog" to "certifications"
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">My Certifications</h2>
          <div className="section-decorator"></div>
          <p className="section-subtitle">
            A collection of certifications I've earned on my learning journey.
          </p>
        </motion.div>

        <div className="certifications-grid">
          {/* Changed 'post' to 'cert' for clarity */}
          {certificationsList.map((cert, index) => (
            <motion.a 
              key={index} 
              href={cert.link} 
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer"
              className="certifications-card" // Renamed class
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            >
              <div className="certifications-image-container">
                <img src={cert.image} alt={cert.title} className="certifications-image" />
                <span className="certifications-category">{cert.category}</span>
              </div>
              <div className="certifications-content">
                <h3 className="certifications-title">{cert.title}</h3>
                {/* Removed meta (date/time) and excerpt as they are not in the data */}
                <div className="certifications-view-details">
                  View Certificate <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="certifications-view-all-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Updated link and text for the button */}
          <motion.a 
            href="https://drive.google.com/drive/folders/1osI36XYhrbmzXj1KRSrejKgQF-l3Uz1J"
            target="_blank"
            rel="noopener noreferrer"
            className="certifications-view-all-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Credentials <i className="ri-folder-open-line"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}