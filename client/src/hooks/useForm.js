import { useState } from 'react';

export default function useForm(submitHandler, initialValues, validateFunction) {
	const [formValues, setFormValues] = useState(initialValues);
	const [serverErrorMessage, setServerErrorMessage] = useState('');
	const [formErrorMessage, setFormErrorMessage] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const onChange = (e) => {
		setFormValues((state) => ({
			...state,
			[e.target.name]: e.target.value
		}));
	};

	const onBlur = (e) => {
		const currentErrors = validateFunction(e.target.name, e.target.value);
		console.log(currentErrors);
		setFormErrorMessage((state) => ({ ...state, ...currentErrors }));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			await submitHandler(formValues);
		} catch (error) {
			setServerErrorMessage(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		formValues,
		formErrorMessage,
		serverErrorMessage,
		isLoading,
		onChange,
		onBlur,
		onSubmit
	};
}
