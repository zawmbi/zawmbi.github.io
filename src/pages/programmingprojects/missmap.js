import React, { useState } from "react";
import { Box, Typography, Chip, Link, Button, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import "../../projects.css";

const missmapContent = {
  title: "MissMap",
  subtitle: "AI-assisted synonym enrichment & metadata standardization pipeline for plant sequence data",
  githubLink: "https://github.com/zawmbi/missmap", // Update with actual link
  contactLink: "/contact",
  
  techStack: [
    "Python",
    "Bioinformatics",
    "Data Pipelines",
    "Metadata Curation",
    "Reproducibility"
  ],
  
  detailedTech: [
    "Python (primary)",
    "pandas",
    "argparse/typer",
    "JSON/YAML configs",
    "logging",
    "CSV/TSV/JSON outputs"
  ],
  
  problem: {
    intro: "Plant sequence databases contain millions of records with inconsistent taxon names, synonyms, and metadata. This fragmentation makes large-scale analyses, data curation, and reproducible research unnecessarily difficult.",
    points: [
      "Inconsistent taxon names and synonyms fragment datasets",
      "Messy metadata harms automated analysis and reproducibility",
      "Manual curation doesn't scale"
    ]
  },
  
  solution: [
    { step: "1", title: "Input records", description: "Load plant sequence metadata from NCBI's nucleotide database" },
    { step: "2", title: "Normalize/parse names", description: "Clean and standardize taxon name formats" },
    { step: "3", title: "Enrich with synonyms", description: "AI-assisted mapping to accepted names and likely synonyms" },
    { step: "4", title: "Output standardized dataset", description: "Generate consistent, reproducible outputs with logs" }
  ],
  
  contributions: [
    "Designed and implemented the pipeline architecture in Python",
    "Built modular steps for parsing, normalization, enrichment, and output writing",
    "Focused on reproducibility (config files, deterministic outputs where possible, logging)",
    "Wrote scripts/utilities for quality checks and validation"
  ],
  
  pipelineHighlights: [
    {
      title: "Reproducible runs",
      description: "Config-driven execution ensures consistent results across runs"
    },
    {
      title: "Modular stages",
      description: "Easy to swap components or update individual processing steps"
    },
    {
      title: "Clear provenance",
      description: "Comprehensive logs and intermediate outputs for full traceability"
    },
    {
      title: "Safety/validation checks",
      description: "Catches bad names, missing fields, and data quality issues"
    },
    {
      title: "Scalability mindset",
      description: "Batch processing designed to handle large datasets efficiently"
    }
  ],
  
  impact: {
    outcomes: [
      "Improves consistency of taxon naming across records",
      "Reduces manual cleanup time",
      "Makes datasets easier to reuse across projects"
    ],
    nextMeasurements: [
      "Precision of mappings",
      "Coverage across different plant families",
      "Error analysis and confidence metrics"
    ]
  },
  
  limitations: {
    current: [
      "Synonym ambiguity and taxonomic disagreement remain challenging",
      "Quality depends on input metadata completeness",
      "Requires curated reference sources for best results"
    ],
    nextSteps: [
      "Add evaluation benchmarks for mapping quality",
      "Integrate additional reference taxonomies",
      "Improve audit trail and confidence scoring"
    ]
  }
};

export default function MissMap() {
  const [expandedAccordion, setExpandedAccordion] = useState(false);

  return (
    <Box sx={{ 
      padding: "20px", 
      maxWidth: "1200px", 
      margin: "0 auto",
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#1b5e20" }}>
        MissMap
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "30px", color: "#555" }}>
        Work in Progress
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "30px", maxWidth: "600px" }}>
        This page is currently under construction. Check back soon for details about this AI-assisted synonym enrichment & metadata standardization pipeline for plant sequence data.
      </Typography>

    </Box>
  );
}