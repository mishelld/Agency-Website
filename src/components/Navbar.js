import React, { useState } from "react";
import "./Navbar.css";
import icon from "../assets/mainIcon.svg";
import Arrow from "../assets/Rightw.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={icon} alt="logo" />
        <h1>Nexcent</h1>
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {/* Hamburger / close button inside menu */}
        <div className="close-btn" onClick={() => setOpen(false)}>
          &times;
        </div>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#community">Community</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <button className="navbar-btn">
          Register Now
          <img src={Arrow} alt="arrow" className="navbar-arrow-icon" />
        </button>
      </ul>
      {/* Hamburger button to open menu */}
      {!open && (
        <div className="hamburger" onClick={() => setOpen(true)}>
          &#9776;
        </div>
      )}
    </nav>
  );
};

export default Navbar;
