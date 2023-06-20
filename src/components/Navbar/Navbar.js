import { useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from "../../imgs/logos/logo.png";
import profilePic from "../../imgs/logos/profile.png";

function Navbar({ handleLogout }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  // Function to close the navbar
  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <Link to="/" onClick={closeNavbar}>
        <img src={logo} className="logo" height="35px" alt="logo" />
      </Link>
      <nav ref={navRef}>
        <CustomLink to="/" onClick={closeNavbar}>
          Home
        </CustomLink>
        <CustomLink to="/categories" onClick={closeNavbar}>
          New Task
        </CustomLink>
        <CustomLink to="/browse" onClick={closeNavbar}>
          Browse Tasks
        </CustomLink>
        <CustomLink to="/mytasks" onClick={closeNavbar}>
          My Tasks
        </CustomLink>
        <CustomLink to="/FAQpage" onClick={closeNavbar}>
          FAQ Page
        </CustomLink>
        <CustomLink to="/my-profile" onClick={closeNavbar}>
          My Profile
        </CustomLink>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="profile-container">
        <button className="button" onClick={handleLogout}>
          Log Out
        </button>
        <Link to="/my-profile" onClick={closeNavbar}>
          <img src={profilePic} className="profile-pic" alt="Profile" />
        </Link>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

function CustomLink({ to, children, onClick, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link
      to={to}
      className={isActive ? "active" : ""}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
}

export default Navbar;
