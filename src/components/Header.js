import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

export const Header = (props) => {
  const { score, highScore } = props;
  return (
    <div id='header'>
      <h1 id='heading'>Memory Game</h1>
      <p id='rules'>Try to remember the cards you have clicked.</p>
      <div id='scoreboard'>
        <div id='current-score'>{`SCORE: ${score}`}</div>
        <div id='high-score'>{`HIGH SCORE: ${highScore}`}</div>
      </div>
    </div>
  )
}
