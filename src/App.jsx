import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useActiveSection } from "./hooks/useActiveSection";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./basic/ScrollToTopButton";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

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
    <BrowserRouter>
      <div className="app-container">
        <Header activeSection={activeSection} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

        <Footer />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
