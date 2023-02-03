import React from 'react';
import { Link, useLocation } from "react-router-dom";
import '../css/Nav.css'

const Nav = () => {

  const location = useLocation();

  const { pathname } = location;

  return (
    <nav className="nav">
      <ul>
        <li key="home" className={`nav--item ${pathname === "/home" ? "active" : ""}`}>
          <Link to="/home">Home</Link>
        </li>
        <li key="my-reviews" className={`nav--item ${pathname === "/reviews" ? "active" : ""}`}>
          <Link to="/reviews">My Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;