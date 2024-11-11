import { useState } from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  
  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
  };

  const handleShowResult = () => {
    setCurrentScreen('result');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
  };

  return (
    <div className="App">
      {currentScreen === 'home' && <HomeComponent onStartQuiz={handleStartQuiz} />}
      {currentScreen === 'quiz' && <QuizComponent onQuit={handleShowResult} />}
      {currentScreen === 'result' && (
        <ResultComponent 
          score={20}
          totalQuestions={15}
          attempted={9}
          correct={3}
          wrong={6}
          onPlayAgain={handleStartQuiz}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;