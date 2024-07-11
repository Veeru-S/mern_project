import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ username }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/employees">Employee List</Link>
      </div>
      <div className="navbar-user">
        <span>{username}</span>
        <button onClick={() => { localStorage.removeItem('token'); window.location.reload(); }}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
