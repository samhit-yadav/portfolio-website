import React from "react";


import { useActiveSection } from "./hooks/useActiveSection";
import "./App.css";


import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./basic/ScrollToTopButton";


function App() {
  const activeSection = useActiveSection([
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "certifications",
    "contact"
  ]);

  

  return (
    <div className="app-container">
      
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
     
    </div>
  );
}

export default App;
