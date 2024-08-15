// будет игровым полем с клетками,
// где каждая клетка представляет из себя кнопку.
// При нажатии на определенную клетку будет происходить ход одной из сторон;

import { FieldLayout } from './FieldLayout';
const arrayOfSquare = Array(9).fill('');
const handleClick = () => {
	console.log('клик');
};

export const FieldContainer = () => {
	return (
		<>
			<FieldLayout arrayOfSquare={arrayOfSquare} handleClick={handleClick} />
		</>
	);
};
