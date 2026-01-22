import React from "react";
import { Box, Typography, CardMedia, Chip, Link } from "@mui/material";
import "../../projects.css";

export default function PictoBeat() {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        PicToBeat
      </Typography>

      <Box sx={{ marginBottom: "30px" }}>
        <Link
          href="https://pictobeat.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: "18px",
            color: "#1b5e20",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Visit PicToBeat →
        </Link>
        <Box sx={{ marginTop: "8px" }}>
          <Link
            href="https://github.com/zawmbi/PicToBeat"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: "18px",
              color: "#1b5e20",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Access it on GitHub →
          </Link>
        </Box>
      </Box>

      <Typography
        variant="body1"
        sx={{ marginBottom: "20px", lineHeight: 1.8 }}
      >
        PicToBeat was a music recommendation tool that connected imagery and music discovery. Upload any photo, and the application would extract the vibe and feeling from that image, then curated a Spotify playlist that matched those vibes along with using your unique Spotify listening stats. You could even customize the ratio of familiar vs. new songs to discover on your generated playlist.
      </Typography>

      <Typography
        variant="body1"
        sx={{ marginBottom: "20px", lineHeight: 1.8 }}
      >
        This project is now a graveyard of what was once a fully functional application. Spotify deprecated the recommendations endpoint that was integral for the recommendations to work. 
      </Typography>

      <Typography
        variant="body1"
        sx={{ marginBottom: "20px", lineHeight: 1.8 }}
      >
        Despite its demise, PictoBeat served as a valuable learning experience in API integration, React development, and building projects that depend on third-party services.
      </Typography>

      <Box sx={{ marginTop: "30px" }}>
        <Typography variant="h6" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
          Tech Stack
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          <Chip label="React" />
          <Chip label="Spotify API" />
          <Chip label="Visual Analysis" />
          <Chip label="Machine Learning" />
        </Box>
      </Box>
    </Box>
  );
}
