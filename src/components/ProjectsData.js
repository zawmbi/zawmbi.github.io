export const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      skills: ["Web Development", "Design"],
      languages: ["React", "HTML/CSS", "JavaScript"],
      dateCompleted: "2029-04-04",
      image: "/attachments/portfolioTitle.png",
      link: "./portfolio-project",

    },
    {
      id: 2,
      title: "ECG Classification",
      skills: ["GUI", "Signal Processing"],
      languages: ["Matlab"],
      dateCompleted: "2024-11-30",
      image: "/attachments/ECGProjectTitle.png",
      link: "./ecg-project",
    },
    {
      id: 3,
      title: "United States Wildfire Analysis",
      skills: ["Machine Learning", "Data Visualization"],
      languages: ["Python", "R"],
      dateCompleted: "2024-12-03",
      image: "/attachments/WildfireTitle.png",
      link: "/programmingprojects/wildfire-analysis.js"
    },
    // {
    //   id: 4,
    //   title: "Elementary Cell Automation",
    //   skills: ["Math"],
    //   languages: ["C"],
    //   dateCompleted: "2024-09-07",
    //   image: "/attachments/.png",
    //   link: "/programmingprojects/elementary-cell.js"
    // },
    // {
    //   id: 5,
    //   title: "Dynamic Memory Food Web Analysis",
    //   skills: ["Dynamic Programming"],
    //   languages: ["C"],
    //   dateCompleted: "2024-09-21",
    //   image: "/attachments/.png",
    //   link: "/programmingprojects/elementary-cell.js"
    // },
    {
      id: 6,
      title: "A Dynamically Evil Word Guessing Game",
      skills: ["Game Development", "Dynamic Programming"],
      languages: ["C"],
      dateCompleted: "2023-10-05",
      // image: "/attachments/.png",
      link: "/programmingprojects/dynamic-guessing-game.js"
    },
    {
      id: 7,
      title: "Popular Vote Minimizer",
      skills: ["Dynamic Programming"],
      languages: ["C"],
      dateCompleted: "2023-10-22",
      // image: "/attachments/.png",
      link: "/programmingprojects/vote-minimizer.js"
    },
    {
      id: 8,
      title: "Find the Shortest Word Latter",
      skills: ["Dynamic Programming"],
      languages: ["C"],
      dateCompleted: "2023-11-05",
      // image: "/attachments/.png",
      link: "/programmingprojects/shortest-ladder.js"
    },
    {
    id: 9,
    title: "Escape the Labrynth",
    skills: ["Game Development", "Dynamic Programming"],
    languages: ["C"],
    dateCompleted: "2023-11-19",
    // image: "/attachments/.png",
    link: "/programmingprojects/escape-labrynth.js"
  },
  {
    id: 10,
    title: "Outlast the Baddies and Avoid the Abyss",
    skills: ["Game Development", "Dynamic Programming"],
    languages: ["C"],
    dateCompleted: "2023-12-01",
    // image: "/attachments/.png",
    link: "/programmingprojects/outlast-baddies.js"
  },
  {
    id: 11,
    title: "Library Management System",
    skills: ["Data Management"],
    languages: ["C++"],
    dateCompleted: "2023-09-05",
    // image: "/attachments/.png",
    link: "/programmingprojects/library-management.js"
  },
  {
    id: 12,
    title: "Mini Search Engine",
    skills: ["Data Management"],
    languages: ["C++"],
    dateCompleted: "2023-09-21",
    // image: "/attachments/.png",
    link: "/programmingprojects/search-engine.js"
  },
  {
    id: 13,
    title: "Shape List Drawing Canvas",
    skills: ["Data Management", "Test Frameworks", "Dynamic Programming"],
    languages: ["C++"],
    dateCompleted: "2023-10-17",
    // image: "/attachments/.png",
    link: "/programmingprojects/shape-list.js"
  },
  {
    id: 14,
    title: "Hospital Priority Queue",
    skills: ["Data Management", "Test Frameworks", "Dynamic Programming"],
    languages: ["C++"],
    dateCompleted: "2023-11-07",
    // image: "/attachments/.png",
    link: "/programmingprojects/priority-queue.js"
  },
  {
    id: 15,
    title: "Graphs",
    skills: ["Data Management", "Test Frameworks", "Dynamic Programming"],
    languages: ["C++"],
    dateCompleted: "2023-11-28",
    // image: "/attachments/.png",
    link: "/programmingprojects/graphs.js"
  },
  {
    id: 16,
    title: "Hospital Database",
    skills: ["Data Management"],
    languages: ["MySQL"],
    dateCompleted: "2024-07-26",
    // image: "/attachments/.png",
    link: "/programmingprojects/graphs.js"
  },



  ];
  
  // Dynamically generate `tags` based on `skills` and `languages`
  export const generateTags = (projects) => {
    return projects.map((project) => ({
      ...project,
      tags: [...project.skills, ...project.languages],
    }));
  };
  
  // Generate projects with tags
  export const projectsWithTags = generateTags(projects);
  