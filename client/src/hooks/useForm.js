import { useState } from 'react';

export default function useForm(submitHandler, initialValues) {
	const [formValues, setFormValues] = useState(initialValues);
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false)

	const onChange = (e) => {
		setFormValues((state) => ({
			...state,
			[e.target.name]: e.target.value
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			await submitHandler(formValues);
		} catch (error) {
			setErrorMessage(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return { formValues, errorMessage, isLoading, onChange, onSubmit };
}
