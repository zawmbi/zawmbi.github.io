import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import React from 'react'
import NavBar from './components/NavBar.js' /* components start with capitals ONLY */
import Cards from "./components/Cards"; 

import Research from "./pages/Research.js";
import Projects from "./pages/Projects.js";
import Rosalind from "./pages/Rosalind.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";


function App() {
  
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = "/" element = {


          <main>
            <section className="intro">
              <h1>₊˚⊹♡ welcome to my portfolio ♡⊹˚₊ </h1>
            </section>
          
            <section className="portfolio-cards">
              <Cards />
            </section>
          </main> } />


          <Route path = "/projects" element = { <Projects />} />
          <Route path = "/research" element = { <Research />} />
          <Route path = "/rosalind" element = { <Rosalind />} />
          <Route path = "/about"    element = { <About    />} />
          <Route path = "/contact"  element = { <Contact   />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
