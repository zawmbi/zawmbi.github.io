import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar.js';
import Cards from "./components/Cards";
import Loading from "./components/Loading";
import { projectsWithTags as projects } from "./components/ProjectsData";

import Research from "./pages/Research.js";
import Projects from "./pages/Projects.js";
import Rosalind from "./pages/Rosalind.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import ProjectDetail from "./pages/ProjectDetail.js";
import WildfireAnalysis from "./pages/programmingprojects/wildfire-analysis.js";
import CV from "./pages/CV.js";
import YouTube from "./pages/Youtube.js";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // toggle body class based on loading state
    if (isLoading) {
      document.body.classList.add('loading');
    } else {
      document.body.classList.remove('loading');
    }
  }, [isLoading]);

  // no simulated delay for loading
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter basename="/">
          <NavBar />
          <div className="content-container">
            <Routes>
              <Route
                path="/"
                element={
                  <main>
                    <section className="intro">
                      <h1>₊˚⊹♡ Welcome to Linda's Portfolio ♡⊹˚₊ </h1>
                      <h3> This website is always being updated, but contact me for the most recent info if you can't find it here! </h3>
                      <br></br>
                      
                    </section>
                    <section className="portfolio-cards">
                      <Cards projects={projects} />
                    </section>
                  </main>
                }
              />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/research" element={<Research />} />
              <Route path="/rosalind" element={<Rosalind />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/youtube" element={<YouTube />} />
              <Route path="/cv" element={<CV />} />
              <Route
                path="/programmingprojects/wildfire-analysis.js"
                element={<WildfireAnalysis />}
              />
            </Routes>
          </div>
        </BrowserRouter>

      )}
    </React.Fragment>
  );
}

export default App;

<Routes>
  {/* routes for the projects page(s) */}
  <Route path="/programmingprojects/wildfire-analysis" element={<WildfireAnalysis />} />
</Routes>;