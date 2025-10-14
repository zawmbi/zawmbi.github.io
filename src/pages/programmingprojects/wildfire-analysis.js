import "../../projects.css";

const WildfireAnalysis = () => 
  {
  const project = 
  {
    title: "United States Wildfire Analysis",
    description:
      "This project focuses on analyzing wildfire data in the United States using machine learning and data visualization techniques. The goal is to identify patterns and trends that can help mitigate future wildfire risks.",
    image: "/attachments/WildfireTitle.png",
    tags: ["Machine Learning", "Data Visualization", "Python", "R"],
  };

  return (
    <p>The purpose of this project is to use machine learning models to predict risk of wildfires in the United States given at least 15 key predictors, originally coming from a dataset of over 900,000 unique entries. Still trying to figure out how to upload the 20 page report in a readable way.  </p>
  );
};

export default WildfireAnalysis;
