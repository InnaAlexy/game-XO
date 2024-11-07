import React from 'react';
import Field from './Field';
import style from './FieldsLayout.module.css';

const FieldsLayout = ({ state }) => {
	const { fields } = state;

	return (
		<div className={style.FieldsLayout}>
			{fields.map((field, index) => (
				<Field key={index} field={field} index={index} state={state} />
			))}
		</div>
	);
};

export default FieldsLayout;
