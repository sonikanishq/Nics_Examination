// src/components/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Ensure you import the CSS file for styling

const HomePage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/language-selection');
  };

  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <div className="home-page-image">
          <img src="/src/images/online-calisma-1.png" alt="Home" />
        </div>
        <div className="home-page-login">
          <h1>WELCOME!! </h1>
            <h2>To <i>"NICS TECHNOLOGIES"</i> Exam Portal</h2>
          <button onClick={handleContinue} className="continue-button">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
