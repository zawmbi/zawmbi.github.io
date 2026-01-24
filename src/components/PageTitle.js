import React from 'react';
import { useLocation } from 'react-router-dom';
import './PageTitle.css';

function PageTitle() {
  const location = useLocation();
  
  const getPageName = () => {
    const path = location.pathname;
    
    // Home page - no title needed
    if (path === '/' || path === '') return null;
    
    // Custom page titles
    const customTitles = {
      '/cv': 'CV',
      '/about': 'About Me',
      '/projects': 'Projects',
      '/research': 'Research',
      '/rosalind': 'Rosalind Problems',
      '/contact': 'Contact',
      '/youtube': 'YouTube Channel'
    };
    
    // Check for exact matches first
    if (customTitles[path]) return customTitles[path];
    
    // Project detail pages
    if (path.startsWith('/projects/')) return 'Project Details';
    
    // Programming project pages
    if (path.includes('wildfire-analysis')) return 'Wildfire Analysis';
    if (path.includes('portfolio-project')) return 'Portfolio Website';
    if (path.includes('pictobeat')) return 'PicToBeat';
    if (path.includes('animalrestaurant')) return 'Animal Restaurant Tracker';
    
    // Default fallback
    const pageName = path.substring(1);
    return pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, ' ');
  };
  
  const pageName = getPageName();
  
  if (!pageName) return null;
  
  return (
    <div className="page-title-container">
      <h1 className="page-title">{pageName}</h1>
    </div>
  );
}

export default PageTitle;
