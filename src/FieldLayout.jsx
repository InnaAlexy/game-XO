import style from './FieldLayout.module.css';

export const FieldLayout = ({ arrayOfSquare, handleClick }) => {
	return (
		<div className={style.spaceForSquare}>
			{arrayOfSquare.map((item, index) => (
				<button key={index} className={style.square} onClick={handleClick}>
					{' '}
					{item}
				</button>
			))}
		</div>
	);
};
