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
        <p className="update-message">
          This page is always being updated, so go to my github at{" "}
          <a href="https://github.com/zawmbi" target="_blank" rel="noreferrer">
            github.com/zawmbi
          </a> for the most recent updates to my code. Here are some of the programming projects I have completed in the last year or two. Clicking on the project card will take you to a page containing its description, code, repository link, and demo if applicable.
        </p>
        <br /><br />
        <ProjectList />
      </main>
    </div>
  );
}

export default Projects;
