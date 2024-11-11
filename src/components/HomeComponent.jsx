import './HomeComponent.css';
import PropTypes from 'prop-types';

function HomeComponent({ onStartQuiz }) {
  return (
    <div className="home-container">
      <div className="quiz-content">
        <h1 className="quiz-title">Quiz App</h1>
        <button className="play-button" onClick={onStartQuiz}>Play</button>
      </div>
    </div>
  );
}

HomeComponent.propTypes = {
  onStartQuiz: PropTypes.func.isRequired,
};

export default HomeComponent;