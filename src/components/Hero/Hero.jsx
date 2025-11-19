import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

// import samhit from '../../assets/samhit-prof.png';

import samhit from "../../assets/samhit-2.png";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const socialLinks = [
  { 
    icon: "ri-github-fill", 
    url: "https://github.com/samhit-yadav" },
  {
    icon: "ri-linkedin-box-fill",
    url: "https://www.linkedin.com/in/samhit-yadav-nambaru-83995a256/"
  },
  { 
    icon: "ri-mail-send-line", 
    url: "mailto:samhityadav123@gmail.com" 
  }
];

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      {/* Animated particles */}
      <div className="particles-background">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Sidebar Social Icons */}
      <motion.div
        className="social-sidebar"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "var(--color-primary-light)" }}
          >
            <i className={link.icon}></i>
          </motion.a>
        ))}
      </motion.div>

      {/* Main Hero Content */}
      <div className="hero-grid container">
        {/* Left Column: Text */}
        <motion.div
          className="hero-text-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="hero-intro" variants={fadeIn}>
            Hello, I'm
          </motion.p>

          <motion.h1 className="hero-title" variants={fadeIn}>
            <span className="gradient-text">Samhit Yadav</span>
          </motion.h1>

          <motion.div className="hero-subtitle-container" variants={fadeIn}>
            <p className="hero-subtitle">Full Stack Developer</p>
            <p className="hero-university">NIT CALICUT @2025</p>
          </motion.div>

          <motion.div className="hero-buttons" variants={fadeIn}>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-button primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px var(--color-primary-rgba)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="/Samhit_Yadav_Nambaru.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px var(--color-primary-rgba)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Photo */}
        <motion.div
          className="hero-photo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <img src={samhit} alt="Samhit Yadav" className="hero-photo" />
        </motion.div>

        {/* Mobile Social Links */}
        <motion.div className="social-mobile" variants={fadeIn}>
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "var(--color-primary-light)" }}
            >
              <i className={link.icon}></i>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
