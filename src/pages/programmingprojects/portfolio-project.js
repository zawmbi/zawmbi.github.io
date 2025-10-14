import "../../projects.css";

const PortfolioProject = () =>
{
    const project =
    {
        title: "Portfolio Website Project",
        description: "Projectception! This is the project page for this portfolio website. The repository can be found on github, if you're interested in the code it took to get here! This is my first and only project using primarily CSS/HTML.",
        image: "/attachments/PortfolioTitle.png",
        tags: ["Web Development"],
        
    };
    return (
        <p> Projectception! This is the project page for this portfolio website. The repository can be found on github, if you're interested in the code it took to get here! This is my first and only project using primarily CSS/HTML. </p>
        );
};

export default PortfolioProject;

// fix the text formatting to match across all pages
