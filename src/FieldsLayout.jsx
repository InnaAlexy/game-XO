import React from 'react';
import Field from './Field';
import style from './FieldsLayout.module.css';

const FieldsLayout = ({ fields, handleClick }) => {
	return (
		<div className={style.FieldsLayout}>
			{fields.map((field, index) => (
				<Field
					key={index}
					field={field}
					handleClick={handleClick}
					index={index}
				/>
			))}
		</div>
	);
};

export default FieldsLayout;
