import { PLAYER } from './constants/constants';

export const initialState = {
	fields: Array(9).fill(''),
	currentPlayer: PLAYER.crosses,
	status: false,
	isDraw: false,
};

export const AppReduser = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload,
			};
		case 'SET_FIELDS':
			return {
				...state,
				fields: payload,
			};
		case 'SET_STATUS':
			return {
				...state,
				status: payload,
			};
		case 'SET_IS_DRAW':
			return {
				...state,
				isDraw: payload,
			};
		case 'RESTART_GAME':
			return initialState;

		default:
			return state;
	}
};
