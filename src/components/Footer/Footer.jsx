import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      className="footer-section"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <div className="footer-main-content">
          <div className="footer-column">
            <h3 className="footer-logo">Samhit Yadav</h3>
            <p className="footer-bio">
              Just trying to center a div in a chaotic world.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/samhit-yadav"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/samhit-yadav-nambaru-83995a256/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
              <a href="mailto:samhityadav123@gmail.com" className="social-link">
                <i className="ri-mail-fill"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="footer-link"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Get In Touch</h4>
            <p className="footer-cta-text">
              Always open to discussing new opportunities and interesting
              projects.
            </p>
            <a
              href="mailto:samhityadav123@gmail.com"
              className="footer-cta-button"
            >
              <i className="ri-chat-1-line"></i> Say Hello
            </a>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
             By Samhit Yadav
            
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
