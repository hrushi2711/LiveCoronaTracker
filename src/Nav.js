import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <div style={{ fontSize: "25px" }}>🏠 </div>
      </Link>
      <ul className="nav-links">
        <Link
          style={{ color: "white", textDecoration: "none", marginTop: "15px" }}
          to="/about"
        >
          <li> 📝About Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
