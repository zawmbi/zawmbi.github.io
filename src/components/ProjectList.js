import React, { useState } from "react";
import { TextField, Autocomplete, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projectsWithTags as projects } from "../components/ProjectsData.js";
import "../projects.css";

const ProjectList = () => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Extract unique skills and coding languages from the projects dynamically
  const allSkills = [...new Set(projects.flatMap((project) => project.skills))];
  const allLanguages = [...new Set(projects.flatMap((project) => project.languages))];

  // Function to get filtered and sorted projects
  const getFilteredAndSortedProjects = () => {
    // Apply filtering
    let filtered = projects.filter(
      (project) =>
        (!selectedSkill || project.skills.includes(selectedSkill)) &&
        (!selectedLanguage || project.languages.includes(selectedLanguage))
    );

    // Apply sorting
    if (sortOption === "alphabeticalAsc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "alphabeticalDesc") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === "dateCompletedAsc") {
      filtered.sort((a, b) => new Date(a.dateCompleted) - new Date(b.dateCompleted));
    } else if (sortOption === "dateCompletedDesc") {
      filtered.sort((a, b) => new Date(b.dateCompleted) - new Date(a.dateCompleted));
    }

    return filtered; // Return filtered and sorted projects
  };

  return (
    <div className="project-list">
      <div className="filter-sort-container">
        {/* Filter by Skill */}
        <Autocomplete
          options={allSkills}
          onChange={(event, value) => setSelectedSkill(value || "")}
          renderInput={(params) => <TextField {...params} label="Filter by Skill" variant="outlined" />}
          className="filter-box"
        />

        {/* Filter by Coding Language */}
        <Autocomplete
          options={allLanguages}
          onChange={(event, value) => setSelectedLanguage(value || "")}
          renderInput={(params) => <TextField {...params} label="Filter by Coding Language" variant="outlined" />}
          className="filter-box"
        />

        {/* Sort Options */}
        <FormControl className="filter-box">
          <InputLabel id="sort-label">Sort By</InputLabel>
          <Select
            labelId="sort-label"
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            label="Sort By"
          >
            <MenuItem value="">Clear Sorting</MenuItem>
            <MenuItem value="alphabeticalAsc">Alphabetical (A - Z)</MenuItem>
            <MenuItem value="alphabeticalDesc">Alphabetical (Z - A)</MenuItem>
            <MenuItem value="dateCompletedDesc">Date Completed (New to Old)</MenuItem>
            <MenuItem value="dateCompletedAsc">Date Completed (Old to New)</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Display Filtered and Sorted Projects */}
      <div className="project-cards-container">
        {getFilteredAndSortedProjects().map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
