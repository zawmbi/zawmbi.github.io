import React, { useState } from "react";
import { TextField, Autocomplete, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projectsWithTags as projects } from "../components/ProjectsData.js";
import "../projects.css";

const ProjectList = () => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [sortOption, setSortOption] = useState("");

  // extract  skills and coding languages from the projects jsons dynamically
  const allSkills = [...new Set(projects.flatMap((project) => project.skills))];
  const allLanguages = [...new Set(projects.flatMap((project) => project.languages))];

  // filtering for skills and langugaes
  let filteredProjects = projects.filter(
    (project) =>
      (!selectedSkill || project.skills.includes(selectedSkill)) &&
      (!selectedLanguage || project.languages.includes(selectedLanguage))
  );

// sorting logic
    if (sortOption === "alphabeticalAsc") {
        filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "alphabeticalDesc") {
        filteredProjects.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === "dateCompletedAsc") {
        filteredProjects.sort((a, b) => new Date(a.dateCompleted) - new Date(b.dateCompleted));
    } else if (sortOption === "dateCompletedDesc") {
        filteredProjects.sort((a, b) => new Date(b.dateCompleted) - new Date(a.dateCompleted));
    } else if (sortOption === "") {
        // Reset to default order (by ID or any natural order in the array)
        filteredProjects = [...projects];
    }
  

  return (
    <div className="project-list">
      <div className="filter-sort-container">
        {/* filter by skill */}
        <Autocomplete
          options={allSkills}
          onChange={(event, value) => setSelectedSkill(value || "")}
          renderInput={(params) => <TextField {...params} label="Filter by Skill" variant="outlined" />}
          className="filter-box"
        />

        {/* filter by coding language */}
        <Autocomplete
          options={allLanguages}
          onChange={(event, value) => setSelectedLanguage(value || "")}
          renderInput={(params) => <TextField {...params} label="Filter by Coding Language" variant="outlined" />}
          className="filter-box"
        />

        {/* sort options */}
        <FormControl className="filter-box">
            <InputLabel id="sort-label">Sort By</InputLabel>
            <Select
                labelId="sort-label"
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}
                label="Sort By"
            >
                <MenuItem value="">Clear Sorting</MenuItem> {/* Add this option */}
                <MenuItem value="alphabeticalAsc">Alphabetical (A - Z)</MenuItem>
                <MenuItem value="alphabeticalDesc">Alphabetical (Z - A)</MenuItem>
                <MenuItem value="dateCompletedDesc">Date Completed (New to Old)</MenuItem>
                <MenuItem value="dateCompletedAsc">Date Completed (Old to New)</MenuItem>
            </Select>
        </FormControl>

      </div>

      {/* displays the filtered/sorted projects */}
      <div className="project-cards-container">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
