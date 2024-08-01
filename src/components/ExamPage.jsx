import React from 'react';

const ExamPage = () => {
  const language = localStorage.getItem('examLanguage');

  return (
    <div className="exam-page">
      <h2>Exam in {language}</h2>
      {/* Render exam content based on the selected language */}
    </div>
  );
};

export default ExamPage;
