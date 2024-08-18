// будет выводить, чей на данный момент ход (крестика или нолика),
// либо информацию о победе одной из сторон;

import { InformationLayout } from './InformationLayout';

export const InformationContainer = ({ winner, isDraw, isGameEnded, currentPlayer }) => {
	return (
		<>
			<InformationLayout
				winner={winner}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
		</>
	);
};
