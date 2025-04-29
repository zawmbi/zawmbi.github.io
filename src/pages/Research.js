import React from "react";
import "../research.css";

function Research() {

  return (
    <div>
      <main>
        
  <h1>Research</h1>
  <hr className="faint-divider" />
{/* MissMap Pipeline */}
<div className="research-card">
  <a
    href="https://github.com/zawmbi/MissMap" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={`${process.env.PUBLIC_URL}/attachments/missmap.png`}
      alt="MissMap Pipeline Development"
      className="research-card-image"
    />
  </a>
  <div className="image-caption">
    <a
      href="https://github.com/zawmbi/MissMap" 
      target="_blank"
      rel="noopener noreferrer"
    >
      View the GitHub repository here.
    </a>
  </div>

  <div className="research-card-text">
    <p>
      MissMap is a computational pipeline currently in the extremely early stages of development. Its goal is to map the availability of genetic sequence data across plant lineages, particularly focusing on chloroplast, mitochondrial, nuclear, transcriptome, RAD-Seq, and barcode genes. By leveraging public databases like NCBI GenBank, MissMap aims to automate the retrieval, classification, and visualization of sequencing completeness for target clades. The pipeline is designed to assist researchers in quickly identifying data gaps, resolving contentious phylogenies, and supporting better-informed sampling strategies for evolutionary studies. Future updates intend to include data cleaning, ortholog detection, and clade-level sequence summaries. To be presented at Botany 2025 in Palm Springs, California.
    </p>
  </div>
  <div className="scroll-cue"> April 2025 - Independent research project in progress</div>
</div>


  {/* Herbaria Paper */}
  <div className="research-card">
  <a
    href="https://www.biorxiv.org/content/10.1101/2025.02.12.637878v1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={`${process.env.PUBLIC_URL}/attachments/HerbariaPaper.png`}
      alt="Herbaria RNA Study"
      className="research-card-image"
    />
  </a>
  <div className="image-caption">
    <a
      href="https://www.biorxiv.org/content/10.1101/2025.02.12.637878v1"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read the full paper here.
    </a>
  </div>

  <div className="research-card-text">
    <p>
      I am fourth author on a study that tested whether RNA suitable for transcriptomic analysis could be recovered from herbarium specimens collected up to 30 years ago. By extracting RNA from preserved tissues and comparing gene expression profiles, the project demonstrated that mRNA remains biologically informative in many samples despite degradation over time. This expands the utility of historical plant collections for evolutionary and functional genomics. The paper was featured on a podcast the day after publication — <a href="https://open.spotify.com/episode/1cqAG0Xv3hmmNJtJOqYNFa?si=Kgs0xI1qQXmb_5PTgUe4mQ" target="_blank" rel="noopener noreferrer">listen here</a>.
    </p>
  </div>
  <div className="scroll-cue">February 2025 - Undergraduate supervised by Dr. Joseph Walker at UIC</div>

</div>
  {/* Botany Poster */}
  <div className="research-card">
  <a
    href={`${process.env.PUBLIC_URL}/attachments/botanyPoster.png`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={`${process.env.PUBLIC_URL}/attachments/botanyPoster.png`}
      alt="Botany 2024 Poster"
      className="research-card-image"
    />
  </a>
  <div className="image-caption">Click to the image to view the full poster.</div>

  <div className="research-card-text">
    <p>
    At Botany 2024, I presented my first independent research examining whether plant tissue gene expression clusters by species or tissue type, revisiting findings from Yang and Wang (2013) using RNA-Seq methods. Inspired by Brawand et al. (2011) and Mármol-Sánchez et al. (2023), we also investigated if gene expression profiles remain intact in silica-dried tissue over time. Our results , delivered in the form of PCA and heatmapping, confirmed species-level clustering in plants, and showed that even tissue preserved for six months retains usable expression patterns, highlighting the potential of herbarium samples for transcriptomic research. </p>
  </div>
  <div className="scroll-cue">June 2024 - Undergraduate supervised by Dr. Joseph Walker at UIC</div>
</div>




</main>

    </div>
  );
}

export default Research;
