import style from './FieldLayout.module.css';

export const FieldLayout = ({ field, handleClick }) => {
	return (
		<div className={style.spaceForSquare}>
			{field.map((item, index) => (
				<button
					key={index}
					id={index}
					className={style.square}
					onClick={handleClick}
				>
					{item}
				</button>
			))}
		</div>
	);
};
