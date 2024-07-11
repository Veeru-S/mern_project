import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo">Admin Panel</div>
        <div className="nav-links">
          <Link to="/dashboard">Home</Link>
          <Link to="/employee-list">Employee List</Link>
          <Link to="/login" onClick={handleLogout}>Logout</Link>
        </div>
      </nav>
      <div className="sidebar">
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="main-content">
        <h1>Welcome to the Admin Panel</h1>
      </div>
    </div>
  );
};

export default Dashboard;
