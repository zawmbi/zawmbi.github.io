import React from "react";
import "../youtube.css";

function YouTube() {
    return (
        <div className="youtube-container">
            <main>
                <h2>My YouTube Channel</h2>
                <h3>
                    This is my YouTube channel! There is almost nothing on it yet, but I do 
                    enjoy making videos when I have time.
                </h3>

                <div className="youtube-card">
                    <a
                        href="https://www.youtube.com/@bebebioinformatics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link"
                    >
                        Visit @bebebioinformatics on YouTube 
                    </a>
                </div>

                {/* Optional Embedded Channel Preview */}
                <div className="youtube-embed">
                    <iframe
                        width="560"
                        height="315"
                        src="https://youtu.be/07sT5BJzQA8?si=BVneR7EeoIsvoH8n"
                        title="Bebe Bioinformatics YouTube Channel"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </main>
        </div>
    );
}

export default YouTube;
