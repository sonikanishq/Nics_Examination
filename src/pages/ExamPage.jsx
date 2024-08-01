import React, { useState, useEffect } from 'react';
import './ExamPage.css';

const API_ENDPOINT = 'https://opentdb.com/api.php?amount=20&category=18&type=multiple'; // Updated to fetch 20 questions

const ExamPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(60 * 15); // 15 minutes in seconds
  const [isExamFinished, setIsExamFinished] = useState(false);

  // Fetch questions from API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        setQuestions(data.results.map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
          correctAnswer: q.correct_answer
        })));
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();

    // Handle countdown timer
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timer);
          setIsExamFinished(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Request permissions
    const requestPermissions = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        await navigator.mediaDevices.getUserMedia({ audio: true });
        await navigator.geolocation.getCurrentPosition(
          () => {},
          () => alert('Location access is required for the exam.')
        );
      } catch (err) {
        alert('Please allow camera, microphone, and location permissions.');
      }
    };

    // Request fullscreen mode
    const enterFullScreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    };

    // Prevent tab switching
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        alert('Tab switching is not allowed during the exam.');
        window.location.reload(); // Reload the page to prevent cheating
      }
    };

    requestPermissions().then(() => enterFullScreen());
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Clean-up: Remove event listeners
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleAnswerChange = (option) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questions[currentQuestionIndex].id]: option
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleExamFinish = (e) => {
    e.preventDefault();
    setIsExamFinished(true);
    // Save answers and submit exam logic here

    // Clean-up: Exit full-screen mode
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }

    // Notify user about permissions release
    alert('Exam finished. Permissions and full-screen mode have been reverted.');
  };

  const getQuestionStatus = (questionId) => {
    if (answers[questionId] !== undefined) {
      return 'answered';
    }
    return 'unattempted';
  };

  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(answers).length;
  const unattemptedQuestions = totalQuestions - answeredQuestions;

  if (isExamFinished) {
    return <div className="exam-finished">Exam is finished. Please wait for results.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="exam-page">
      <div className="question-panel">
        {currentQuestion && (
          <>
            <h2>Question {currentQuestionIndex + 1}</h2>
            <div className="question">
              <h3 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
              {currentQuestion.options.map(option => (
                <div key={option} className="option">
                  <input 
                    type="radio" 
                    name={`question-${currentQuestion.id}`} 
                    value={option}
                    checked={answers[currentQuestion.id] === option}
                    onChange={() => handleAnswerChange(option)}
                    required
                  />
                  <label dangerouslySetInnerHTML={{ __html: option }} />
                </div>
              ))}
            </div>
            <div className="navigation-buttons">
              <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
              <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
            </div>
          </>
        )}
      </div>
      <div className="summary-panel">
        <div className="timer">
          Time Remaining: {Math.floor(timeRemaining / 60)}:{String(timeRemaining % 60).padStart(2, '0')}
        </div>
        <div className="summary-grid">
          <div className="summary-item">
            <span>Total Questions:</span>
            <span>{totalQuestions}</span>
          </div>
          <div className="summary-item">
            <span>Answered Questions:</span>
            <span className="answered">{answeredQuestions}</span>
          </div>
          <div className="summary-item">
            <span>Unattempted Questions:</span>
            <span className="unattempted">{unattemptedQuestions}</span>
          </div>
        </div>
        <div className="omr-panel">
          <h3>Question Status</h3>
          <div className="omr-grid">
            {questions.map(question => (
              <div 
                key={question.id} 
                className={`omr-item ${getQuestionStatus(question.id)}`}
                onClick={() => setCurrentQuestionIndex(question.id - 1)}
              >
                {question.id}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleExamFinish} className="submit-button">Submit Exam</button>
      </div>
    </div>
  );
};

export default ExamPage;
