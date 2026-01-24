import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";  
import "../style.css";
import "../navbar.css";

import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const navRef = useRef();
    const location = useLocation();
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const closeNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    };
    
    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };
    
    const getActivePageName = () => {
        if (location.pathname === '/') return 'Home';
        if (location.pathname.startsWith('/projects')) return 'Projects';
        if (location.pathname.startsWith('/research')) return 'Research';
        if (location.pathname.startsWith('/rosalind')) return 'Rosalind Problems';
        if (location.pathname.startsWith('/about')) return 'About';
        if (location.pathname.startsWith('/contact')) return 'Contact Me';
        if (location.pathname.startsWith('/youtube')) return 'YouTube Channel';
        if (location.pathname.startsWith('/cv')) return 'CV';
        return 'Home';
    };

    return (
        <header className="nav">
            <div className="logo">
                <Link to="/">
                    <img src="/attachments/leaf.png" alt="Logo" />
                </Link>
            </div>
            
            <div className="current-page-mobile">{getActivePageName()}</div>

            <nav ref={navRef}>
                <Link to="/" onClick={closeNavbar} className={isActive('/') ? 'active' : ''}>Home</Link>
                <Link to="/projects" onClick={closeNavbar} className={isActive('/projects') ? 'active' : ''}>Projects</Link>
                <Link to="/research" onClick={closeNavbar} className={isActive('/research') ? 'active' : ''}>Research</Link>
                <Link to="/rosalind" onClick={closeNavbar} className={isActive('/rosalind') ? 'active' : ''}>Rosalind Problems</Link>
                <Link to="/about" onClick={closeNavbar} className={isActive('/about') ? 'active' : ''}>About</Link>
                <Link to="/contact" onClick={closeNavbar} className={isActive('/contact') ? 'active' : ''}>Contact Me</Link>
                <Link to="/youtube" onClick={closeNavbar} className={isActive('/youtube') ? 'active' : ''}>YouTube Channel</Link>
                <Link to="/cv" onClick={closeNavbar} className={isActive('/cv') ? 'active' : ''}>CV</Link>


                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>

            {/* This button opens the nav menu */}
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar;