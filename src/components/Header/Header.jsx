import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Theme Setup
  const [theme, setTheme] = useState(() => {
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Main navigation handler
  const handleNavClick = async (id) => {
    setIsMenuOpen(false);

    // If clicking Projects → Go to /projects
    if (id === "projects") {
      navigate("/projects");
      return;
    }

    // If currently on home page, scroll normally
    if (location.pathname === "/") {
      scrollToSection(id);
      return;
    }

    // If NOT on home page → navigate home THEN scroll
    navigate("/");

    // Wait a tiny moment for page to load, then scroll
    setTimeout(() => scrollToSection(id), 200);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="header-nav container">
        <div className="header-content">

          {/* Logo */}
          <div className="header-logo" onClick={() => handleNavClick("home")}>
            Samhit
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-button ${
                  location.pathname === "/projects" && item.id === "projects"
                    ? "active"
                    : activeSection === item.id
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-button"
            aria-label="Toggle theme"
          >
            <i className={theme === 'light' ? 'ri-moon-line' : 'ri-sun-line'} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-button ${
                  location.pathname === "/projects" && item.id === "projects"
                    ? "active"
                    : activeSection === item.id
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
