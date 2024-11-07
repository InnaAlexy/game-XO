import React from 'react';
import style from './Field.module.css';
import { store } from '../../store';
import { checkWinner } from '../../utils/checkWinner';
import { PLAYER } from '../../constants/constants';

const Field = ({ state, field, index }) => {
	const { currentPlayer, status, fields } = state;

	const handleClick = (index) => {
		if (status) {
			return;
		}
		const newFields = fields.slice();

		if (fields[index] === '') {
			newFields[index] = currentPlayer;

			store.dispatch({ type: 'SET_FIELDS', payload: newFields });

			if (checkWinner(newFields, currentPlayer)) {
				store.dispatch({ type: 'SET_STATUS', payload: true });
				return;
			}

			if (newFields.every((field) => field !== '')) {
				store.dispatch({ type: 'SET_IS_DRAW', payload: true });
			}
			if (currentPlayer === PLAYER.crosses) {
				store.dispatch({
					type: 'SET_CURRENT_PLAYER',
					payload: PLAYER.noughts,
				});
			} else
				store.dispatch({
					type: 'SET_CURRENT_PLAYER',
					payload: PLAYER.crosses,
				});
		}
	};

	return (
		<div className={style.Field} onClick={() => handleClick(index)}>
			{field}
		</div>
	);
};

export default Field;
