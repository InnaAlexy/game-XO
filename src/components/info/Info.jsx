import React from 'react';
import style from './Info.module.css';

const Info = ({ state }) => {
	const { currentPlayer, isDraw, status } = state;

	return (
		<>
			<h1 className={style.Info}>
				{isDraw
					? 'Ничья'
					: status
						? `Winner: ${currentPlayer}`
						: `Ходит: ${currentPlayer} `}
			</h1>
		</>
	);
};

export default Info;
