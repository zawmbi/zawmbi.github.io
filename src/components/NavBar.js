
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";  // library that contains icons (i.e for loading, coding languages, etc)
import "../style.css"
import LeafLogo from "../attachments/leaf.png"; // imports my leaf logo 
import { Link } from 'react-router-dom';


function NavBar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    } // this function is called when the FaTimes button is pressed 


    return (
        <header className="nav"> 
            <div className="logo">
                <Link to="/">
                    <img src={LeafLogo} alt="Logo" />
                </Link>
            </div>

            <nav ref = {navRef}>
                <Link to = "/"> Home</Link>
                <Link to = "/projects"> Projects</Link>
                <Link to = "/research"> Research</Link>
                <Link to = "/rosalind"> Rosalind Problems </Link>
                <Link to = "/about"> About</Link>
                <Link to = "/contact"> Contact Me</Link>
                <button className = "nav-btn nav-close-btn" onClick = {showNavbar}> {/* hamburger for navbar */}
                    <FaTimes />
                </button>
            </nav>
            
            {/* in smaller screens, this button is used to open the nav options, calling the showNavbar function */}
            <button className = "nav-btn" onClick = {showNavbar}> 
                <FaBars />  {/* three bars to represent more options if you click */}
            </button>
        </header>
    );
}

export default NavBar;

