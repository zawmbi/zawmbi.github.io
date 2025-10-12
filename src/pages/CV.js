import React from "react";
import "../cv.css";

function CV() {
    return (
        <div className="cv-container">
            <main>
                <h2>Here is the most recent version of my CV</h2>
                <h3>Last updated in August 2025</h3>

                {/* Download Button */}
                <a 
                    href="../attachments/Linda_Mansour_CV.pdf" 
                    download="Linda_Mansour_CV.pdf" 
                    className="download-btn"
                >
                    Download CV (PDF)
                </a>

                {/* Embedded PDF Preview */}
                <div className="pdf-viewer">
                    <iframe
                        src="../attachments/Linda_Mansour_CV.pdf"
                        title="Linda Mansour CV"
                        width="95%"
                        height="800px"
                        style={{ border: "none" }}
                    ></iframe>
                </div>
            </main>
        </div>
    );
}

export default CV;
