import React from 'react';
import FieldsLayout from '../field/FieldsLayout';
import Info from '../info/Info';
import styles from './GameLayout.module.css';
import { useDispatch } from 'react-redux';
import { RESTART_GAME } from '../../actions/restart-game';

const GameLayout = () => {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(RESTART_GAME);
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
