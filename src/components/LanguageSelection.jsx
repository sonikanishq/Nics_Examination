import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LanguageSelection.css';

const LanguageSelection = () => {
  const navigate = useNavigate();

  const handleLanguageSelection = (language) => {
    localStorage.setItem('examLanguage', language);
    navigate('/instructions', { state: { language } });
  };

  return (
    <div className="language-selection-container">
      <h2>Select Exam Language</h2>
      <div className="language-buttons">
        <button onClick={() => handleLanguageSelection('english')} className="language-button">
          English
        </button>
        <button onClick={() => handleLanguageSelection('hindi')} className="language-button">
          Hindi
        </button>
      </div>
    </div>
  );
};

export default LanguageSelection;
