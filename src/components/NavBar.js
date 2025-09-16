import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";  
import "../style.css";
import "../navbar.css";
import { Link } from 'react-router-dom';

function NavBar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const closeNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    };

    return (
        <header className="nav">
            <div className="logo">
                <Link to="/">
                    <img src="/attachments/leaf.png" alt="Logo" />
                </Link>
            </div>

            <nav ref={navRef}>
                <Link to="/" onClick={closeNavbar}>Home</Link>
                <Link to="/projects" onClick={closeNavbar}>Projects</Link>
                <Link to="/research" onClick={closeNavbar}>Research</Link>
                <Link to="/rosalind" onClick={closeNavbar}>Rosalind Problems</Link>
                <Link to="/about" onClick={closeNavbar}>About</Link>
                <Link to="/contact" onClick={closeNavbar}>Contact Me</Link>
                <Link to="/youtube" onClick={closeNavbar}>YouTube Channel</Link>


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