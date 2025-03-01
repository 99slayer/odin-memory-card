import React from 'react';
import '../styles/Header.css';

export const Header = (props) => {
	const { score, highScore } = props;
	return (
		<div id='header'>
			<div>
				<h1 id='heading'>Memory Game</h1>
				<p id='rules'>Try and click each card only once. Clicking the same card twice will restart the game.</p>
			</div>
			<div id='scoreboard'>
				<div id='current-score'>{`CURRENT SCORE: ${score}`}</div>
				<div id='high-score'>{`HIGH SCORE: ${highScore}`}</div>
			</div>
		</div>
	)
}
