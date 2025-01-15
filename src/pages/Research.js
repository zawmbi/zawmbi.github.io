import React from "react";
import "../research.css";

function Research() {

    return (
        <div>
          <main>
          <h1>Research</h1>
          <hr className="faint-divider" />
          <br/>
          <p className = "update-message">Thank you for your patience while this page is under construction. </p> <br /> <br />
          <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}/attachments/botanyPoster.PNG`} alt="Botany Poster" className="botany-poster" />
                </div>
          </main>
        </div>
      );
    }

export default Research; 