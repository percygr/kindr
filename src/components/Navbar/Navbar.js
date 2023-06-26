import { useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from "../../imgs/logos/logo.png";
import avatar from "../../imgs/icons/user.png";

function Navbar({ handleLogout, userInfo, setShowProfileID }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  function unsetProfileChoice() {
    setShowProfileID(null);
    closeNavbar();
  }

  return (
    <header role="banner">
      <Link to="/" onClick={closeNavbar} aria-label="Navigate to Home Page">
        <img src={logo} className="logo" height="35px" alt="logo" />
      </Link>
      <nav ref={navRef} role="navigation">
        <CustomLink to="/" onClick={closeNavbar} aria-label=" Home page">
          Home
        </CustomLink>
        <CustomLink
          to="/categories"
          onClick={closeNavbar}
          aria-label="New Task page"
        >
          New Task
        </CustomLink>
        <CustomLink
          to="/browse"
          onClick={closeNavbar}
          aria-label="Browse Tasks page"
        >
          Browse Tasks
        </CustomLink>
        <CustomLink to="/mytasks" onClick={closeNavbar} aria-label="My Tasks">
          My Tasks
        </CustomLink>
        <CustomLink to="/FAQpage" onClick={closeNavbar} aria-label="FAQ Page">
          FAQ Page
        </CustomLink>
        <CustomLink
          to="/profile"
          onClick={() => unsetProfileChoice()}
          aria-label="My Profile page"
        >
          My Profile
        </CustomLink>

        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>
      </nav>
      <div className="profile-container">
        <button className="button" onClick={handleLogout} aria-label="Logout">
          Log Out
        </button>
        <Link
          to="/profile"
          onClick={() => unsetProfileChoice()}
          aria-label="Navigate to My Profile"
        >
          {userInfo.avatar_link ? (
            <img
              src={`${process.env.REACT_APP_SUPABASE_IMAGE_URL}${userInfo.avatar_link}`}
              className="profile-pic"
              alt="Profile"
            />
          ) : (
            <img src={avatar} className="profile-pic" alt="Profile" />
          )}
        </Link>
      </div>
      <button className="nav-btn" onClick={showNavbar} aria-label="Open Menu">
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
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export default Navbar;
