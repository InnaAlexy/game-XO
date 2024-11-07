import React from 'react';
import FieldsLayout from '../field/FieldsLayout';
import Info from '../info/Info';
import styles from './GameLayout.module.css';
import { store } from '../../store';

const GameLayout = ({ state }) => {
	const onClick = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<div>
			<Info state={state} />
			<FieldsLayout state={state} />
			<button onClick={onClick} className={styles.button}>
				Начать заново
			</button>
		</div>
	);
};

export default GameLayout;
