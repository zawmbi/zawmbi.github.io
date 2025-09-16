import React from "react";
import { Link } from "react-router-dom";
import "../cards.css"; 

function Cards() {
  return (
    <main>

      <div className="cards-container">
        {/* Projects */}
        <div className="card">
          <Link to="./projects" style={{ textAlign: "center", color: "white" }}>Projects</Link>
        </div>
        {/* Research */}
        <div className="card">
          <Link to="./research" style={{ textAlign: "center", color: "white" }}>Research</Link>
        </div>
        {/* Rosalind */}
        <div className="card">
          <Link to="./rosalind" style={{ textAlign: "center", color: "white" }}>Rosalind Problems</Link>
        </div>
        {/* About me */}
        <div className="card">
          <Link to="./about" style={{ textAlign: "center", color: "white" }}>About</Link>
        </div>
        {/* Contact me */}
        <div className="card">
          <Link to="./contact" style={{ textAlign: "center", color: "white" }}>Contact Me</Link>
        </div> 
        <div className="card">
          <Link to="./youtube" style={{ textAlign: "center", color: "white" }}>YouTube Channel</Link>
        </div>      
      </div>

    </main>
  );
}

export default Cards;

