import React from "react";
import "../about.css";

function About() {
    return (
        <div>
            <main className="about-text">
                <h1>About Me</h1>
                <hr className="faint-divider" />
                <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}/attachments/aboutme.PNG`} alt="Linda" className="profile-photo" />
                </div>
                <p className="about-paragraph">
                    
                Hi, my name is Linda!
                </p> <br/>
                <p className="about-paragraph">
                I am a post-bacc researcher at UIC working in bioinformatics for plant transcriptomics and phylogenomics. I build Python pipelines such as MissMap to query NCBI/GenBank, resolve taxon synonyms, and map sequence type coverage (rbcL, matK, ITS; plastid, mitochondrial, nuclear; transcriptomes). I also serve as a Populations and Communities Biology TA. I am seeking bioinformatics roles and a PhD lab in computational phylogeny, genetics, or evolution, with an emphasis on reproducible data pipelines and comparative genomics.
                </p>
                <p className="about-paragraph">
                For the past few years, I have committed myself to weightlifting, calisthenics, and jump-roping. Outside of the gym, I love exploring the nature paths that Illinois has to offer, particularly in the Palos Forest Preserves, or the various parks in and around Chicago. When the weather permits, I enjoy figure skating!
                </p>
                <p className="about-paragraph">
                At home, I have three cats and a garden. I grow fruits, veggies, herbs, and flowers when it is warm enough to. Some of my more successful plants are tomatoes, cantaloupes, garlic, oregano, mint, and jasmine. I enjoy cooking and baking middle eastern dishes and desserts with my mom. I also love sudoku, reading, playing Plague Inc., and browsing Fragrantica in idle times.
                </p>
            </main>
        </div>
  );
}

export default About;
