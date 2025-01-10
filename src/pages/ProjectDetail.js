import React from "react";
import { useParams } from "react-router-dom";
import { projectsWithTags as projects } from "../components/ProjectsData";
import { Box, Typography, CardMedia, Chip } from "@mui/material";
import "../projects.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <Typography variant="h4">Project not found</Typography>;
  }

  return (
    <Box padding={3}>
      <Typography variant="h3">{project.title}</Typography>
      <CardMedia
        component="img"
        height="300"
        image={project.image}
        alt={project.title}
        sx={{ marginY: 2 }}
      />
      <Typography variant="body1">{project.description}</Typography>
      <Box marginTop={2}>
        {project.tags.map((tag, index) => (
          <Chip key={index} label={tag} sx={{ marginRight: 1 }} />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectDetail;
