
import React from "react";
import "./Footer.css"; //

const Footer = () => {
  return (
    <footer className="footer">
      {/* <hr className="footer-line" /> */}
      <div className="footer-content">
        <p className="footer-text">&copy; {new Date().getFullYear()} Kindr - JSON and The Arguments</p>
      </div>
    </footer>
  );
};

export default Footer;
