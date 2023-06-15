import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from "../../imgs/logos/logo.png";
import profilePic from "../../imgs/logos/profile.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} className="logo" height="35px" alt="logo" />
      </Link>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/categories">New Task</Link>
        <Link to="/browse">Browse Tasks</Link>
        <Link to="/mytasks">My Tasks</Link>
        <Link to="/my-profile">My Profile</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="profile-container">
        <Link to="/my-profile">
          <img src={profilePic} className="profile-pic" alt="Profile" />
        </Link>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
