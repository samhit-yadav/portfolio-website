import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const features = [
  {
    icon: "ri-code-s-slash-line",
    title: "Full Stack Development",
    description: "Building robust, high-quality applications with solid frontend & backend engineering."
  },
  {
    icon: "ri-graduation-cap-line",
    title: "Academic Excellence",
    description: "Mechanical Engineering graduate from NIT Calicut with strong analytical foundations."
  },
  {
    icon: "ri-palette-line",
    title: "UI/UX Focused",
    description: "Creating clean, modern, and intuitive designs that enhance user experience."
  },
  {
    icon: "ri-rocket-2-line",
    title: "Innovation Driven",
    description: "Constantly exploring new technologies and solving real-world problems creatively."
  }
];

const stats = [
  { label: "Degree", value: "B.Tech, Mechanical Engineering" },
  { label: "Projects Completed", value: "5+" },
  { label: "GPA", value: "7.86 / 10" },
  { label: "Interests", value: "Cricket • Badminton • Music" }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-decorator"></div>
        </motion.div>

        {/* Intro + Stats */}
        <div className="about-grid">
          
          {/* About Text */}
          <motion.div className="about-text" variants={fadeRight} initial="hidden" whileInView="visible">
            <h3 className="about-subtitle">Crafting clean, modern, and meaningful digital experiences.</h3>

            <p>
              I’m a Full Stack Developer passionate about turning ideas into impactful solutions. With strong
              foundations in <b><i>Java, Spring Boot, React</i></b> and modern software principles, I enjoy building 
              tools and applications that make life easier.
            </p>

            <p>
              As a Mechanical Engineering graduate from <b>NIT Calicut</b>, I bring analytical thinking and 
              problem-solving skills into every project.
            </p>

            <p>
              Outside of tech, you’ll find me improving my game in cricket & badminton, or exploring new
              technologies that inspire creativity.
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div className="about-stats-card" variants={fadeLeft} initial="hidden" whileInView="visible">
            <div className="stats-title">At a Glance</div>
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="feature-card"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
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
