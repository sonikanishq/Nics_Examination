import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, logout, username } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/src/images/nicstechindia-1.webp" alt="NICS TECHNOLOGIES Logo" className="navbar-logo-image" />
          <h1 className="navbar-logo-text">NICS TECHNOLOGY</h1>
        </div>
        <div className="navbar-heading-container">
          <h1 className="navbar-heading">Secure Exam Portal!!!</h1>
        </div>
        <div className="navbar-user-info">
          {isAuthenticated ? (
            <>
              <span className="navbar-username">Welcome, {username}</span>
              <button onClick={logout} className="logout-button">Logout</button>
            </>
          ) : (
            <Link to="/login" className="navbar-login-link">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
