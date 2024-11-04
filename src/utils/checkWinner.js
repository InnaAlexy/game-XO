import { WIN_PATTERNS } from '../constants/constants';

export const checkWinner = (fields, currentPlayer) => {
	return WIN_PATTERNS.some((pattern) =>
		pattern.every((index) => fields[index] === currentPlayer),
	);
};
