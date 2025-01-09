import React from "react";
import "../about.css";
import Me from "../attachments/aboutmetab.PNG";

function About(){

    return (
        <div>
            <main className="rosalind-text">
                <h1>About Me</h1>
                <br/>
                <div className="image-container">
                    <img src={Me}
                        alt="Photo of me" 
                        className="profile-photo" 
                    />
                </div>
                <p className="about-paragraph">
                    Hi, my name is Linda!
                </p>
                <p className="about-paragraph">
                    I am a full-time student at the University of Illinois at Chicago studying Data 
                    Science with a concentration in Bioinformatics. In addition to my course work, I work 
                    part-time as an undergraduate research assistant of a computational biology lab focused 
                    on plant transcriptomics. I recently presented my first poster on gene expression patterns 
                    in silica dried plants at the Botany 2024 conference this past June! On the side, 
                    I am in the early stages of a megaproject and collaborating with a large group of 
                    talented peers involving pyrogenic organic matter. I aim to pursue graduate studies 
                    in computational biology while gaining industry experience along the way.
                </p>
                <p className="about-paragraph">
                    I've always been an active person, but for the past three years, I have been 
                    participating mostly in weightlifting! I enjoy jump-roping as well. Outside of the
                    gym, I love exploring the nature walks that Illinois has to offer, particularly in the 
                    Palos Forest Preserves. When I have lots of time, I enjoy ice skating indoors and outdoors!
                </p>
                <p className="about-paragraph">
                    At home, I have three cats and a garden. I grow fruits, veggies, herbs,
                    and flowers. Some of my more successful plants are tomatoes, cantaloupes, garlic,
                    oregano, jasmine, and mint. I also enjoy cooking and baking, with a focus on middle 
                    eastern dishes and desserts. I am a huge sweet tooth as well, and will never say no
                    to going out to get a sweet treat with my friends and family! I love sudoku, reading,
                    and browsing Fragrantica in idle times.
                </p>
            </main>
        </div>


    );
}

export default About;
