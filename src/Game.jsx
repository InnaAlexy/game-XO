import React, { useState } from 'react';
import GameLayout from './GameLayout';

const PLAYER = {
	crosses: 'X',
	noughts: 'O',
};

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

const checkWinner = (fields, currentPlayer) => {
	return WIN_PATTERNS.some((pattern) =>
		pattern.every((index) => fields[index] === currentPlayer),
	);
};

const Game = () => {
	const [fields, setFields] = useState(Array(9).fill(''));
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.crosses);
	const [status, setStatus] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const gameRestart = () => {
		setFields(Array(9).fill(''));
		setCurrentPlayer(PLAYER.crosses);
		setStatus(false);
		setIsDraw(false);
	};

	const handleClick = (index) => {
		if (status) {
			return;
		}

		const newFields = fields.slice();

		if (fields[index] === '') {
			newFields[index] = currentPlayer;
			if (newFields.every((field) => field !== '')) {
				setIsDraw(true);
			}

			setFields(newFields);

			if (checkWinner(newFields, currentPlayer)) {
				setStatus(true);
				return;
			}
			setCurrentPlayer((prevState) =>
				prevState === PLAYER.crosses ? PLAYER.noughts : PLAYER.crosses,
			);
		}
	};

	return (
		<div>
			<GameLayout
				isDraw={isDraw}
				status={status}
				currentPlayer={currentPlayer}
				fields={fields}
				handleClick={handleClick}
				gameRestart={gameRestart}
			/>
		</div>
	);
};

export default Game;
