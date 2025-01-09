import React from "react";
import "../cards.css"; // Optional: Separate CSS for card styling

function Cards() {
  return (
    <main>

      <div className="cards-container">
        {/* Projects */}
        <div className="card">
          <a href="./projects" style={{ textAlign: "center", color: "white" }}>Projects</a>
        </div>
        {/* Research */}
        <div className="card">
          <a href="./research" style={{ textAlign: "center", color: "white" }}>Research</a>
        </div>
        {/* Rosalind */}
        <div className="card">
          <a href="./rosalind" style={{ textAlign: "center", color: "white" }}>Rosalind Problems</a>
        </div>
        {/* About me */}
        <div className="card">
          <a href="./about" style={{ textAlign: "center", color: "white" }}>About</a>
        </div>
        {/* Contact me */}
        <div className="card">
          <a href="./contact" style={{ textAlign: "center", color: "white" }}>Contact Me</a>
        </div>        
      </div>

    </main>
  );
}

export default Cards;
