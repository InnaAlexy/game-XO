import React, { useEffect, useState } from 'react';
import Field from './Field';
import style from './FieldsLayout.module.css';
import { store } from '../../store';

const FieldsLayout = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setState(store.getState()));
		return () => unsubscribe();
	}, []);

	const { fields } = state;

	return (
		<div className={style.FieldsLayout}>
			{fields.map((field, index) => (
				<Field key={index} field={field} index={index} />
			))}
		</div>
	);
};

export default FieldsLayout;
