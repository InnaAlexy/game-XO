import React from 'react';
import Field from './Field';
import style from './FieldsLayout.module.css';
import { useSelector } from 'react-redux';

const FieldsLayout = () => {
	const fields = useSelector((store) => store.fields);

	return (
		<div className={style.FieldsLayout}>
			{fields.map((field, index) => (
				<Field key={index} index={index} field={field} />
			))}
		</div>
	);
};

export default FieldsLayout;
