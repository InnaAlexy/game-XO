import React from 'react';
import style from './Info.module.css';
import { useSelector } from 'react-redux';

const Info = () => {
	const currentPlayer = useSelector((store) => store.currentPlayer);
	const isDraw = useSelector((store) => store.isDraw);
	const status = useSelector((store) => store.status);

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
