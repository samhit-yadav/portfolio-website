import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const fadeIn = (direction = "up") => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
});

const features = [
  {
    icon: "ri-code-s-slash-line",
    title: "Full Stack Development",
    description:
      "Building end-to-end applications with modern technologies and best practices."
  },
  {
    icon: "ri-graduation-cap-line",
    title: "Academic Excellence",
    description:
      "Graduate in Mechanical Engineering and interested in cutting-edge technologies."
  },
  {
    icon: "ri-palette-line",
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that enhance user experience."
  },
  {
    icon: "ri-rocket-2-line",
    title: "Innovation",
    description:
      "Constantly exploring new technologies and pushing the boundaries of what's possible."
  }
];

const stats = [
  { label: "Degree", value: "Bachelor's in Mechanical Engineering" },
  { label: "Projects Completed", value: "5+" },
  { label: "GPA", value: "7.86/10" },
  { label: "Cricket", value: "All Rounder" },
  { label: "Songs Listened", value: "∞" }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-decorator"></div>
        </div>

        {/* About Grid */}
        <motion.div
          className="about-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="about-text" variants={fadeIn("right")}>
            <h3 className="about-subtitle">
              Passionate about technology and innovation
            </h3>
            <p>
              I'm a Mechanical Engineering graduate from NIT Calicut who thrives
              on building digital solutions.
            </p>
            <p>
              My approach is simple: use a full-stack mindset to solve complex problems, from crafting responsive user interfaces to engineering robust back-end systems. My projects, often utilizing technologies like <b><i>React</i></b> and <b><i>Spring Boot</i></b> , are built on this foundation. 
            </p>
            <p>
              Off-screen, I enjoy the challenge of learning new languages and
              playing sports like cricket and badminton.
            </p>
          </motion.div>

          <motion.div className="about-stats-card" variants={fadeIn("left")}>
            <h4 className="stats-title">Education & Stats</h4>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={fadeIn("up")}
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="feature-icon-wrapper">
                <i className={feature.icon}></i>
              </div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
