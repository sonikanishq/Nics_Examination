import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LanguageSelectionPage.css'; // Ensure you create a CSS file for styling

const LanguageSelectionPage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('examLanguage', language);
  };

  const handleContinue = () => {
    if (selectedLanguage) {
      navigate('/instructions');
    } else {
      alert('Please select a programming language before continuing.');
    }
  };

  return (
    <div className="language-selection-page">
      <div className="info-section">
        <h2>NICS TECHNOLOGIES</h2>
        <p>Welcome to the NICS TECHNOLOGIES Exam Portal! Select a programming language for your exam. We offer exams for various languages to help you test your skills and advance your career.</p>
      </div>
      <div className="language-selection-content">
        <h3>Select Programming Language for Your Exam</h3>
        <div className="language-buttons">
          <button
            onClick={() => handleLanguageSelection('Java')}
            className={`language-button ${selectedLanguage === 'Java' ? 'active' : ''}`}
          >
            <img src="/src/images/png-transparent-logo-java-runtime-environment-programming-language-runtime-system-oracle-text-logo-desktop-wallpaper-thumbnail.png" alt="Java" className="language-logo" />
            Java
          </button>
          <button
            onClick={() => handleLanguageSelection('C++')}
            className={`language-button ${selectedLanguage === 'C++' ? 'active' : ''}`}
          >
            <img src="/src/images/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png" alt="C++" className="language-logo" />
            C++
          </button>
          <button
            onClick={() => handleLanguageSelection('C')}
            className={`language-button ${selectedLanguage === 'C' ? 'active' : ''}`}
          >
            <img src="/src/images/png-transparent-c-logo-c-programming-language-icon-letter-c-blue-logo-computer-program-thumbnail.png" alt="C" className="language-logo" />
            C
          </button>
          <button
            onClick={() => handleLanguageSelection('Python')}
            className={`language-button ${selectedLanguage === 'Python' ? 'active' : ''}`}
          >
            <img src="/src/images/png-transparent-blue-and-yellow-logo-python-logo-programmer-fierce-python-s-cdr-angle-text-thumbnail.png" alt="Python" className="language-logo" />
            Python
          </button>
          <button
            onClick={() => handleLanguageSelection('React')}
            className={`language-button ${selectedLanguage === 'React' ? 'active' : ''}`}
          >
            <img src="/src/images/png-transparent-react-javascript-library-angularjs-web-application-framework-logo-symmetry-web-application-thumbnail.png" alt="React" className="language-logo" />
            React
          </button>
          <button
            onClick={() => handleLanguageSelection('Django')}
            className={`language-button ${selectedLanguage === 'Django' ? 'active' : ''}`}
          >
            <img src="/src/images/png-transparent-django-python-computer-icons-logo-python-text-label-rectangle-thumbnail.png" alt="Django" className="language-logo" />
            Django
          </button>
        </div>
        <button onClick={handleContinue} className="continue-button">
          Continue
        </button>
      </div>
    </div>
  );
};

export default LanguageSelectionPage;
