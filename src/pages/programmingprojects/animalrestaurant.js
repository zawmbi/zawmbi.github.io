import React, { useState } from "react";
import { Box, Typography, CardMedia, Chip, Link, Button } from "@mui/material";
import "../../projects.css";

export default function AnimalRestaurantTracker() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const screenshots = [
    "/attachments/animal-restaurant-screenshot-1.png",
    "/attachments/animal-restaurant-screenshot-2.png",
    "/attachments/animal-restaurant-screenshot-3.png",

  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
    );
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        Animal Restaurant Tracker
      </Typography>

      <Box sx={{ marginBottom: "30px" }}>
        <Link
          href="https://github.com/zawmbi/animal-restaurant-tracker-app"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: "18px",
            color: "#1b5e20",
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
          <Chip label="Flutter" />
          <Chip label="Dart" />
          <Chip label="iOS & Android App Development" />
          <Chip label="JSON Database Management" />
          <Chip label="Data Management" />
          <Chip label="UI/UX Design" />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {/* Text Column */}
        <Box sx={{ flex : "1 1 300px" }}>
          <Typography
            variant="body1"
            sx={{ marginBottom: "20px", lineHeight: 1.8 }}
          >
            Animal Restaurant is a cozy mobile game where you manage your own restaurant staffed by animals. This tracker is designed to help players keep track of important game elements, including unlocks for customers, dishes, posters, letters, etc., and other progress indicators.
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginBottom: "20px", lineHeight: 1.8 }}
          >
            Whether you're tracking which animals have visited your restaurant, managing your inventory, or planning your daily operations, this tracker makes it simple to stay organized and maximize your gameplay efficiency.
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginBottom: "20px", lineHeight: 1.8 }}
          >
            The tool features an intuitive interface that makes it easy to log your progress and access the information you need at a glance, with the implemented global search function and sorting. This is the first mobile app I have developed! 
          </Typography>
        </Box>

        {/* Carousel Column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            flex: "0 1 auto",
            alignItems: "center",
          }}
        >
          {/* Image Carousel */}
          <Box
            sx={{
              position: "relative",
              width: "300px",
              height: "500px",
              borderRadius: "8px",
              border: "2px solid #d4a574",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <CardMedia
              component="img"
              image={screenshots[currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Navigation Buttons */}
            <Button
              onClick={prevImage}
              sx={{
                position: "absolute",
                left: "10px",
                minWidth: "40px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                color: "black",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
              }}
            >
              ←
            </Button>
            <Button
              onClick={nextImage}
              sx={{
                position: "absolute",
                right: "10px",
                minWidth: "40px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                color: "black",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
              }}
            >
              →
            </Button>
          </Box>

          {/* Slide Counter */}
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            {currentImageIndex + 1} / {screenshots.length}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
