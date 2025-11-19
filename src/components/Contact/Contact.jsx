import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const contactInfo = [
  {
    icon: "ri-mail-line",
    title: "Email",
    value: "samhityadav123@gmail.com",
    link: "mailto:samhityadav123@gmail.com"
  },
  {
    icon: "ri-code-box-fill",   
    title: "Leetcode",
    value: "Samhit1",
    link: "https://leetcode.com/u/Samhit1/"
  },
  {
    icon: "ri-map-pin-line",
    title: "Location",
    value: "Visakhapatnam",
    link: "#"
  },
  {
    icon: "ri-terminal-box-fill",   
    title: "Geeks for Geeks",
    value: "samhityadav123",
    link: "https://www.geeksforgeeks.org/user/samhityadav123/"
  }
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    opacity: 0
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn("up")}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-decorator"></div>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Info Column */}
          <motion.div
            className="contact-info-column"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 className="contact-info-title" variants={fadeIn("up")}>
              Let's start a conversation
            </motion.h3>
            <motion.p
              className="contact-info-description"
              variants={fadeIn("up", 0.1)}
            >
              I'm always excited to work on new projects and collaborate with
              amazing people. Reach out anytime!
            </motion.p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-item"
                  variants={fadeIn("up", 0.2 + index * 0.1)}
                >
                  <div className="contact-info-icon">
                    <i className={info.icon}></i>
                  </div>

                  <div>
                    <h4 className="contact-info-item-title">{info.title}</h4>
                    {info.link.startsWith("#") ? (
                      <span className="contact-info-item-value">
                        {info.value}
                      </span>
                    ) : (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-info-item-value link"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            className="contact-form-column"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <motion.div
                className="form-group-grid"
                variants={fadeIn("up", 0.2)}
              >
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </motion.div>

              <motion.div className="form-group" variants={fadeIn("up", 0.3)}>
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div className="form-group" variants={fadeIn("up", 0.4)}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="submit-button"
                variants={fadeIn("up", 0.5)}
              >
                <i className="ri-send-plane-fill"></i> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
