import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

export const Header = (props) => {
  return (
    <div id='header'>
      <h1>Memory Game</h1>
      <p>describe game rules.</p>
      <div id='scoreboard'>
        <div id='current-score'></div>
        <div id='high-score'></div>
      </div>
    </div>
  )
}
