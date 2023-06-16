import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from "../../imgs/logos/logo.png";
import profilePic from "../../imgs/logos/profile.png";
//import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a href="/">
        <img src={logo} className="logo" height="35px" alt="logo" />
      </a>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/categories">New Task</a>
        <a href="/browse">Browse Tasks</a>
        <a href="/mytasks">My Tasks</a>
        <a href="/FAQpage">FAQ Page</a>
        <a href="/my-profile">My Profile</a>
  
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="profile-container">
        <a href="/my-profile">
          <img src={profilePic} className="profile-pic" alt="Profile" />
        </a>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
