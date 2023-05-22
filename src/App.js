import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import './styles/App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const recordScore = (n) => {
    setScore(n);

    if (n > highScore) {
      setHighScore(n);
    };
  };

  return (
    <div className="App">
      <Header score={score} highScore={highScore}></Header>
      <Main recordScore={recordScore}></Main>
    </div>
  );
}

export default App;
