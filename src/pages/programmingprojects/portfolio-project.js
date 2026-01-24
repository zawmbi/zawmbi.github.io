import React from "react";
import { Box, Typography, Chip, Link } from "@mui/material";
import "../../projects.css";

const PortfolioProject = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        Portfolio Website
      </Typography>

      <Box sx={{ marginBottom: "30px" }}>
        <Link
          href="https://github.com/zawmbi/zawmbi.github.io"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: "18px",
            color: "#1976d2",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          View Repository on GitHub →
        </Link>
      </Box>

      {/* Tech Stack at Top - Centered */}
      <Box sx={{ marginBottom: "30px", textAlign: "center" }}>
        <Typography variant="h6" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
          Tech Stack
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          <Chip label="React" />
          <Chip label="React Router" />
          <Chip label="Material-UI" />
          <Chip label="CSS" />
          <Chip label="JavaScript" />
        </Box>
      </Box>

      <Typography
        variant="body1"
        sx={{ marginBottom: "20px", lineHeight: 1.8 }}
      >
        <strong>Projectception!</strong> This portfolio website is a React-based showcase of my projects, skills, and experience. The site features dynamic project cards, detailed project pages, research highlights, and interactive components with primarily JavaScript and HTML/CSS. I obtain all visuals legally and produce them myself or obtain them through public-use Two and Three.js resources!
      </Typography>

      <Typography
        variant="body1"
        sx={{ marginBottom: "20px", lineHeight: 1.8 }}
      >
        The portfolio is fully responsive, integrates Material-UI for a polished interface, as well as React Router for navigation. I host it for free on Github pages.
      </Typography>

      <Typography
        variant="body1"
        sx={{ marginBottom: "20px", lineHeight: 1.8 }}
      >
        
      </Typography>
    </Box>
  );
};

export default PortfolioProject;
