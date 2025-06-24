import React from "react";
import { Link } from "react-router-dom";
import "../app.css";
import "../navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          class="logo"
          src="/ca-logo.jpg"
          alt="Chartered Accountant Logo"
          className="logo"
        />
      </div>
      <h3>
        J S P U & Associates
        <br />
        Chartered Accountants
      </h3>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/services" className="nav-link">
          Our Services
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
