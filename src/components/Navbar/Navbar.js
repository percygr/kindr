import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from "../../imgs/logo.png";
import profilePic from "../../imgs/icons/man.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={logo} className="logo" height="35px" alt="logo" />
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/categories">New Task</a>
        <a href="/browse">Browse Tasks</a>
        <a href="/mytasks">My Tasks</a>
        <a href="/my-profile">My Profile</a>
        <a href="/my-profile">
          <img src={profilePic} className="profile-pic" alt="Profile"></img>
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
