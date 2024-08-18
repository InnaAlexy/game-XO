import { useState } from 'react';
import { GameLayout } from './GameLayout';

export function GameContainer() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	let [field, setField] = useState(Array(9).fill(''));
	let winner = '';

	return (
		<>
			<GameLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				field={field}
				setField={setField}
				winner={winner}
			/>
		</>
	);
}

// корневой компонент. Будет выводить компоненты Information, Field,
//  а также кнопку «Начать заново».
