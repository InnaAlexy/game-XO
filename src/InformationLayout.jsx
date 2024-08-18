export const InformationLayout = ({ winner, isDraw, isGameEnded, currentPlayer }) => {
	return (
		<>
			<div>
				{' '}
				{isDraw
					? 'Ничья'
					: isGameEnded
						? `Победа: ${currentPlayer}`
						: `Ход:  ${currentPlayer}`}
			</div>
		</>
	);
};
