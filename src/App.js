import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
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
import PortfolioProject from "./pages/programmingprojects/portfolio-project.js";
import PictoBeat from "./pages/programmingprojects/pictobeat.js";
import CV from "./pages/CV.js";
import YouTube from "./pages/Youtube.js";
import AnimalRestaurantTracker from "./pages/programmingprojects/animalrestaurant.js";
import MissMap from "./pages/programmingprojects/missmap.js";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { if (isLoading) document.body.classList.add('loading'); else document.body.classList.remove('loading'); }, [isLoading]);
  useEffect(() => { setIsLoading(false); }, []);

  return (
    <React.Fragment>
      {isLoading ? <Loading /> : (
        <BrowserRouter basename="/">
          <NavBar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={
                <main>
                  <section className="intro">
                    <h1> Welcome to Linda's Portfolio</h1>
                    <h3>This website is always being updated, but <a href="/contact">contact me</a> for the most recent info if you can't find it here!</h3>
                    <br />
                  </section>
                  <section className="portfolio-cards"><Cards projects={projects} /></section>
                  <section className="recent-news">
                    <h1>Recent News</h1>
                    <span className="news-date">April 25, 2026</span>
                    <p>I am approaching the end of my post-baccalaureate at UIC, and have built so many things during my time here! My biggest academic project, <a href="https://github.com/zawmbi/phylabeler" target="_blank" rel="noopener noreferrer">PhyLabeler</a>, is functioning and ready for further expansion. Outside of school, I am building and pitching <a href="https://monitr.xyz" target="_blank" rel="noopener noreferrer">monitr.xyz</a> which is a news aggregator focused on curation while reducing bias. I also have begun developing iOS apps Syllabus to Calendar and Attendance Tracker which are currently under review for the App Store. I also have been TAing for Populations and Communities Biology at UIC (BIOS 120) these past two semesters. </p>
                  
                    <span className="news-date">Oct 12, 2025</span>
                    <p>There is now a "Recent News" segment to centralize new things that are happening in my career. I am currently developing two apps, "PicToBeat" and "Animal Restaurant Progress Tracker" in addition to MissMap for my research lab, which can all be found on the "Projects" page. I am also applying to graduate programs for Fall 2026.</p>
                  </section>
                </main>
              }/>
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/research" element={<Research />} />
              <Route path="/rosalind" element={<Rosalind />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/youtube" element={<YouTube />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/programmingprojects/wildfire-analysis.js" element={<WildfireAnalysis />} />
              <Route path="/programmingprojects/portfolio-project.js" element={<PortfolioProject />} />
              <Route path="/programmingprojects/pictobeat.js" element={<PictoBeat />} />
              <Route path="/programmingprojects/animalrestaurant.js" element={<AnimalRestaurantTracker />} />
              <Route path="/programmingprojects/missmap.js" element={<MissMap />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </React.Fragment>
  );
}

export default App;

