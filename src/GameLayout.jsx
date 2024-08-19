import React from 'react';
import FieldsLayout from './FieldsLayout';
import Info from './Info';
import styles from './GameLayout.module.css';

const GameLayout = ({
	isDraw,
	status,
	currentPlayer,
	fields,
	handleClick,
	gameRestart,
}) => {
	return (
		<div>
			<Info isDraw={isDraw} status={status} currentPlayer={currentPlayer} />
			<FieldsLayout fields={fields} handleClick={handleClick} />
			<button onClick={gameRestart} className={styles.button}>
				Начать заново
			</button>
		</div>
	);
};

export default GameLayout;
