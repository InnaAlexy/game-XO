import React from 'react';
import style from './Field.module.css';
import { checkWinner } from '../../utils/checkWinner';
import { PLAYER } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPlayer, setFields, setIsDraw, setStatus } from '../../actions';

const Field = ({ index, field }) => {
	const currentPlayer = useSelector((store) => store.currentPlayer);
	const status = useSelector((store) => store.status);
	const fields = useSelector((store) => store.fields);

	const dispatch = useDispatch();

	const handleClick = (index) => {
		if (status) {
			return;
		}
		const newFields = fields.slice();

		if (fields[index] === '') {
			newFields[index] = currentPlayer;

			dispatch(setFields(newFields));

			if (checkWinner(newFields, currentPlayer)) {
				dispatch(setStatus(true));
				return;
			}

			if (newFields.every((field) => field !== '')) {
				dispatch(setIsDraw(true));
			}
			if (currentPlayer === PLAYER.crosses) {
				dispatch(setCurrentPlayer(PLAYER.noughts));
			} else dispatch(setCurrentPlayer(PLAYER.crosses));
		}
	};

	return (
		<div className={style.Field} onClick={() => handleClick(index)}>
			{field}
		</div>
	);
};

export default Field;
