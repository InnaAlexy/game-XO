import React from 'react';
import style from './Field.module.css';

const Field = ({ field, index, handleClick }) => {
	return (
		<div className={style.Field} onClick={() => handleClick(index)}>
			{field}
		</div>
	);
};

export default Field;
