import { InformationContainer } from './InformationContainer';
import { FieldContainer } from './FieldContainer';
import style from './GameLayout.module.css';

export function GameLayout({
	winner,
	setField,
	currentPlayer,
	isGameEnded,
	isDraw,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	field,
}) {
	return (
		<div className={style.game}>
			<InformationContainer
				winner={winner}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<FieldContainer
				winner={winner}
				setIsGameEnded={setIsGameEnded}
				isGameEnded={isGameEnded}
				field={field}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setField={setField}
			/>
			<button> Начать заново </button>
		</div>
	);
}
