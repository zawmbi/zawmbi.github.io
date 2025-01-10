export const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      skills: ["Web Development", "Design"],
      languages: ["React", "HTML/CSS", "JavaScript"],
      dateCompleted: "2029-04-04",
      image: "/attachments/portfolioTitle.png",
      link: "/projects/1",
    },
    {
      id: 2,
      title: "ECG Classification",
      skills: ["GUI", "Signal Processing"],
      languages: ["Matlab"],
      dateCompleted: "2024-11-30",
      image: "/attachments/ECGProjectTitle.png",
      link: "/projects/2",
    },
    {
      id: 3,
      title: "United States Wildfire Analysis",
      skills: ["Machine Learning", "Data Visualization"],
      languages: ["Python", "R"],
      dateCompleted: "2024-12-03",
      image: "/attachments/WildfireTitle.png",
      link: "/projects/3",
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
  