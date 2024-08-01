import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import HomePage from './components/HomePage';
import InstructionPage from './pages/InstructionPage';
import ExamPage from './pages/ExamPage';
import LanguageSelectionPage from './pages/LanguageSelectionPage';
import Footer from './components/Footer'; // Ensure Footer component is imported
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
              <Route path="/language-selection" element={<ProtectedRoute element={<LanguageSelectionPage />} />} />
              <Route path="/instructions" element={<ProtectedRoute element={<InstructionPage />} />} />
              <Route path="/exam" element={<ProtectedRoute element={<ExamPage />} />} />
              {/* Add routes for other pages as needed */}
            </Routes>
          </div>
          <Footer /> {/* Footer component here */}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
