import React from "react";
import "../about.css";

function About() {
    return (
        <div>
            <main className="about-text">
                <h1>About Me</h1>
                <hr className="faint-divider" />
                <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}/attachments/aboutmetab.PNG`} alt="Linda" className="profile-photo" />
                </div>
                <p className="about-paragraph">
                    
                Hi, my name is Linda!
                </p> <br/>
                <p className="about-paragraph">
                I am a full-time student at the University of Illinois at Chicago studying Data Science with a concentration in Bioinformatics, projected to graduate in May 2025. In addition to my courses, I work part-time as an undergraduate research assistant of a computational biology lab focused on plant transcriptomics. I am pursuing graduate studies in computational biology and data solutions while gaining industry experience along the way.
                </p>
                <p className="about-paragraph">
                For the past few years, I have committed myself to weightlifting, calisthenics, and jump-roping. Outside of the gym, I love exploring the nature paths that Illinois has to offer, particularly in the Palos Forest Preserves, or the various parks in and around Chicago. When the weather permits, I enjoy figure skating!
                </p>
                <p className="about-paragraph">
                At home, I have three cats and a garden. I grow fruits, veggies, herbs, and flowers when it is warm enough to. Some of my more successful plants are tomatoes, cantaloupes, garlic, oregano, mint, and jasmine. I enjoy cooking and baking middle eastern dishes and desserts with my mom. I also love sudoku, reading, and browsing Fragrantica in idle times.
                </p>
            </main>
        </div>
  );
}

export default About;
