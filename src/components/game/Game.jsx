import React, { useEffect, useState } from 'react';
import GameLayout from './GameLayout';
import { store } from '../../store';

const Game = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setState(store.getState()));
		return () => unsubscribe();
	}, []);

	return (
		<div>
			<GameLayout />
		</div>
	);
};

export default Game;
