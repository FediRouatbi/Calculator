import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/Calculator">
        Calculator
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
