import { PLAYER } from './constants/constants';

export const initialState = {
	fields: Array(9).fill(''),
	currentPlayer: PLAYER.crosses,
	status: false,
	isDraw: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: action.payload,
			};
		case 'SET_FIELDS':
			return {
				...state,
				fields: action.payload,
			};
		case 'SET_STATUS':
			return {
				...state,
				status: action.payload,
			};
		case 'SET_IS_DRAW':
			return {
				...state,
				isDraw: action.payload,
			};
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
