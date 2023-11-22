import { useState } from 'react';

export default function useForm(submitHandler, initialValues) {
	const [formValues, setFormValues] = useState(initialValues);

	const onChange = (e) => {
		setFormValues((state) => ({
			...state,
			[e.target.name]: e.target.value
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		submitHandler(formValues);
	};

	return { formValues, onChange, onSubmit };
}
