import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './InstructionPage.css';

const instructions = {
  english: {
    title: "Online Exam Instructions",
    details: [
      "Ensure you have a stable internet connection.",
      "You will be given a set time to complete the exam.",
      "Follow all the instructions provided for each question.",
      "Do not refresh the page or navigate away during the exam.",
      "Once you start, you must complete the exam in one sitting.",
      "Ensure you have a stable internet connection.",
      "Ensure you have a stable internet connection.",
      "You will be given a set time to complete the exam.",
      "Follow all the instructions provided for each question.",
      "Do not refresh the page or navigate away during the exam.",
      "Once you start, you must complete the exam in one sitting.",
      "Ensure you have a stable internet connection.",
      "Ensure you have a stable internet connection.",
      "You will be given a set time to complete the exam.",
      "Follow all the instructions provided for each question.",
      "Do not refresh the page or navigate away during the exam.",
      "Once you start, you must complete the exam in one sitting.",
      "Ensure you have a stable internet connection.",
      "Ensure you have a stable internet connection.",
      "You will be given a set time to complete the exam.",
      "Follow all the instructions provided for each question.",
      "Do not refresh the page or navigate away during the exam.",
      "Once you start, you must complete the exam in one sitting.",
      "Ensure you have a stable internet connection.",
      "Ensure you have a stable internet connection.",
      "You will be given a set time to complete the exam.",
      "Follow all the instructions provided for each question.",
      "Do not refresh the page or navigate away during the exam.",
      "Once you start, you must complete the exam in one sitting.",
      "Ensure you have a stable internet connection.",
      "Ensure you have a stable internet connection.",
      "You will be given a set time to complete the exam.",
      "Follow all the instructions provided for each question.",
      "Do not refresh the page or navigate away during the exam.",
      "Once you start, you must complete the exam in one sitting.",
      "Ensure you have a stable internet connection.",
      "Ensure you have a stable internet connection.",
      "You will be given a set time to complete the exam.",
      "Follow all the instructions provided for each question.",
      "Do not refresh the page or navigate away during the exam.",
      "Once you start, you must complete the exam in one sitting.",
      "Ensure you have a stable internet connection.",
     
      // Add more details if needed
    ],
    guide: "For further details on the exam process, please refer to our online student guide."
  },
  hindi: {
    title: "ऑनलाइन परीक्षा निर्देश",
    details: [
      "सुनिश्चित करें कि आपके पास स्थिर इंटरनेट कनेक्शन है।",
      "आपको परीक्षा पूरी करने के लिए एक निर्धारित समय दिया जाएगा।",
      "प्रत्येक प्रश्न के लिए प्रदान किए गए निर्देशों का पालन करें।",
      "परीक्षा के दौरान पृष्ठ को रिफ्रेश या नेविगेट न करें।",
      "एक बार शुरू करने के बाद, आपको परीक्षा एक ही बैठक में पूरी करनी होगी।",
      "सुनिश्चित करें कि आपके पास स्थिर इंटरनेट कनेक्शन है।",
      "आपको परीक्षा पूरी करने के लिए एक निर्धारित समय दिया जाएगा।",
      "प्रत्येक प्रश्न के लिए प्रदान किए गए निर्देशों का पालन करें।",
      "परीक्षा के दौरान पृष्ठ को रिफ्रेश या नेविगेट न करें।",
      "एक बार शुरू करने के बाद, आपको परीक्षा एक ही बैठक में पूरी करनी होगी।",
      "सुनिश्चित करें कि आपके पास स्थिर इंटरनेट कनेक्शन है।",
      "आपको परीक्षा पूरी करने के लिए एक निर्धारित समय दिया जाएगा।",
      "प्रत्येक प्रश्न के लिए प्रदान किए गए निर्देशों का पालन करें।",
      "परीक्षा के दौरान पृष्ठ को रिफ्रेश या नेविगेट न करें।",
      "एक बार शुरू करने के बाद, आपको परीक्षा एक ही बैठक में पूरी करनी होगी।",
      "सुनिश्चित करें कि आपके पास स्थिर इंटरनेट कनेक्शन है।",
      "आपको परीक्षा पूरी करने के लिए एक निर्धारित समय दिया जाएगा।",
      "प्रत्येक प्रश्न के लिए प्रदान किए गए निर्देशों का पालन करें।",
      "परीक्षा के दौरान पृष्ठ को रिफ्रेश या नेविगेट न करें।",
      "एक बार शुरू करने के बाद, आपको परीक्षा एक ही बैठक में पूरी करनी होगी।",
      "सुनिश्चित करें कि आपके पास स्थिर इंटरनेट कनेक्शन है।",
      "आपको परीक्षा पूरी करने के लिए एक निर्धारित समय दिया जाएगा।",
      "प्रत्येक प्रश्न के लिए प्रदान किए गए निर्देशों का पालन करें।",
      "परीक्षा के दौरान पृष्ठ को रिफ्रेश या नेविगेट न करें।",
      "एक बार शुरू करने के बाद, आपको परीक्षा एक ही बैठक में पूरी करनी होगी।",
      "सुनिश्चित करें कि आपके पास स्थिर इंटरनेट कनेक्शन है।",
      "आपको परीक्षा पूरी करने के लिए एक निर्धारित समय दिया जाएगा।",
      "प्रत्येक प्रश्न के लिए प्रदान किए गए निर्देशों का पालन करें।",
      "परीक्षा के दौरान पृष्ठ को रिफ्रेश या नेविगेट न करें।",
      "एक बार शुरू करने के बाद, आपको परीक्षा एक ही बैठक में पूरी करनी होगी।",
      "सुनिश्चित करें कि आपके पास स्थिर इंटरनेट कनेक्शन है।",
      "आपको परीक्षा पूरी करने के लिए एक निर्धारित समय दिया जाएगा।",
      "प्रत्येक प्रश्न के लिए प्रदान किए गए निर्देशों का पालन करें।",
      "परीक्षा के दौरान पृष्ठ को रिफ्रेश या नेविगेट न करें।",
      "एक बार शुरू करने के बाद, आपको परीक्षा एक ही बैठक में पूरी करनी होगी।",
      "सुनिश्चित करें कि आपके पास स्थिर इंटरनेट कनेक्शन है।",
      "आपको परीक्षा पूरी करने के लिए एक निर्धारित समय दिया जाएगा।",
      "प्रत्येक प्रश्न के लिए प्रदान किए गए निर्देशों का पालन करें।",
      "परीक्षा के दौरान पृष्ठ को रिफ्रेश या नेविगेट न करें।",
      "एक बार शुरू करने के बाद, आपको परीक्षा एक ही बैठक में पूरी करनी होगी।",
      // Add more details if needed
    ],
    guide: "परीक्षा प्रक्रिया के बारे में अधिक विवरण के लिए, कृपया हमारे ऑनलाइन छात्र गाइड को देखें।"
  }
};

const InstructionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [language, setLanguage] = useState(location.state?.language || 'english');

  const handleCheckboxChange = (e) => {
    setConfirmed(e.target.checked);
  };

  const handleContinue = () => {
    if (confirmed) {
      navigate('/exam'); // Redirect to the exam page or next step
    } else {
      alert('Please confirm that you have read the instructions.');
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="instruction-page">
      <div className="instruction-content">
        <h1>{instructions[language].title}</h1>
        <ul>
          {instructions[language].details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{instructions[language].guide}</p>
      </div>
      <div className="language-selection">
        <label htmlFor="language-select">Choose language:</label>
        <select 
          id="language-select" 
          value={language} 
          onChange={handleLanguageChange}
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div className="confirmation-section">
        <input 
          type="checkbox" 
          id="confirm" 
          checked={confirmed} 
          onChange={handleCheckboxChange} 
        />
        <label htmlFor="confirm">I have read and understood the instructions</label>
      </div>
      <button onClick={handleContinue} className="continue-button">Continue</button>
    </div>
  );
};

export default InstructionPage;
