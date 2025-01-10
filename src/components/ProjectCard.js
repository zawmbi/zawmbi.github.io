import React from "react";
import { Typography, Chip } from "@mui/material";
import "../projects.css";

const ProjectCard = ({ project }) => {
  const { tags, title, description, image } = project;

  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-content">
        <Typography variant="h6" className="project-title">
          {title}
        </Typography>
        <Typography variant="body2" className="project-description">
          {description}
        </Typography>
        <div className="project-tags">
          {tags?.map((tag, index) => (
            <Chip key={index} label={tag} className="project-tag" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
