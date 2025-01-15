import React from "react";
import ProjectList from "../components/ProjectList"; 
import "../projects.css";

function Projects() {
  return (
    <div>
      <main>
      <h1>Programming Projects</h1>
      <hr className="faint-divider" />
      <br/>
      <p className = "update-message">This page is still being updated, but here are some of the programming projects I have completed in the last year or two. Clicking on the project card will take you to a page containing its description, code, repository link, and demo if applicable.  </p> <br /> <br />
      <ProjectList />
      </main>
    </div>
  );
}

export default Projects;
