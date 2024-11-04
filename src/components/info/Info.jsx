import React, { useEffect, useState } from 'react';
import style from './Info.module.css';
import { store } from '../../store';

const Info = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setState(store.getState()));
		return () => unsubscribe();
	}, []);

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
