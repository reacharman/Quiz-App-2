import './QuizComponent.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import questions from '../resources/quizQuestion';

function QuizComponent({ onQuit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleQuit = () => {
    if (window.confirm('Are you sure you want to quit?')) {
      onQuit();
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        
        <h2 className="question-title">Question</h2>
        <span className="question-number">{currentQuestionIndex + 1} of {questions.length}</span>
        <div className="question-text">
          {questions[currentQuestionIndex].question}
        </div>
        
        <div className="options-container">
          <button className="option-button">{questions[currentQuestionIndex].optionA}</button>
          <button className="option-button">{questions[currentQuestionIndex].optionB}</button>
          <button className="option-button">{questions[currentQuestionIndex].optionC}</button>
          <button className="option-button">{questions[currentQuestionIndex].optionD}</button>
        </div>

        <div className="navigation-buttons">
          <button className="nav-button previous" onClick={handlePrevious}>Previous</button>
          <button className="nav-button next" onClick={handleNext}>Next</button>
          <button className="nav-button quit" onClick={handleQuit}>Quit</button>
        </div>
      </div>
    </div>
  );
}

QuizComponent.propTypes = {
  onQuit: PropTypes.func.isRequired,
};

export default QuizComponent;