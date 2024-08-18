// будет игровым полем с клетками,
// где каждая клетка представляет из себя кнопку.
// При нажатии на определенную клетку будет происходить ход одной из сторон;

import { FieldLayout } from './FieldLayout';

export const FieldContainer = ({
	winner,
	setField,
	setIsGameEnded,
	field,
	currentPlayer,
	isGameEnded,
	setCurrentPlayer,
}) => {
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

	let XPattern = [];
	let OPattern = [];

	const checkWinner = (field) => {
		for (let i = 0; i <= field.length; i++) {
			if (field[i] === 'X') {
				XPattern.push(i);
			} else if (field[i] === 'O') {
				OPattern.push(i);
			}
		}

		WIN_PATTERNS.forEach((item) => {
			if (item.toString() === XPattern.toString()) {
				setIsGameEnded(true);
				winner = currentPlayer;
			}
		});
	};

	const handleClick = (event) => {
		if (event.target.textContent === '' && isGameEnded === false) {
			event.target.textContent = currentPlayer;
			const newFields = field.slice();
			newFields[event.target.id] = currentPlayer;

			setField(newFields);

			if (checkWinner(newFields)) {
				return;
			}
			if (isGameEnded === false) {
				if (currentPlayer === 'X') {
					setCurrentPlayer('O');
				} else if (currentPlayer === 'O') {
					setCurrentPlayer('X');
				}
			}

			console.log(winner);
		}
	};
	return (
		<>
			<FieldLayout
				field={field}
				handleClick={handleClick}
				currentPlayer={currentPlayer}
			/>
		</>
	);
};
