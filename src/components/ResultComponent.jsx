import './ResultComponent.css';
import PropTypes from 'prop-types';

function ResultComponent({ score, totalQuestions, attempted, correct, wrong, onPlayAgain, onBackToHome }) {
  return (
    <div className="result-container">
      <div className="result-card">
        <h1 className="result-title">Result</h1>
        
        <h2 className="result-message">You need more practice!</h2>
        <h3 className="result-score">Your score is {score}%</h3>

        <div className="stats-container">
          <div className="stat-row">
            <span>Total number of questions</span>
            <span>{totalQuestions}</span>
          </div>
          <div className="stat-row">
            <span>Number of attempted questions</span>
            <span>{attempted}</span>
          </div>
          <div className="stat-row">
            <span>Number of correct answers</span>
            <span>{correct}</span>
          </div>
          <div className="stat-row">
            <span>Number of wrong answers</span>
            <span>{wrong}</span>
          </div>
        </div>

        <div className="result-buttons">
          <button className="play-again-btn" onClick={onPlayAgain}>Play Again</button>
          <button className="back-home-btn" onClick={onBackToHome}>Back to home</button>
        </div>
      </div>
    </div>
  );
}

ResultComponent.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  attempted: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
  onPlayAgain: PropTypes.func.isRequired,
  onBackToHome: PropTypes.func.isRequired,
};

export default ResultComponent;