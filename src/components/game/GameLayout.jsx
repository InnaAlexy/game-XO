import React, { useEffect, useState } from 'react';
import FieldsLayout from '../field/FieldsLayout';
import Info from '../info/Info';
import styles from './GameLayout.module.css';
import { store } from '../../store';

const GameLayout = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setState(store.getState()));
		return () => unsubscribe();
	}, []);

	const onClick = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<div>
			<Info />
			<FieldsLayout />
			<button onClick={onClick} className={styles.button}>
				Начать заново
			</button>
		</div>
	);
};

export default GameLayout;
