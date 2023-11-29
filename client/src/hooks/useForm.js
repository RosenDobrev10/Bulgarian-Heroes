import { useState } from 'react';

export default function useForm(submitHandler, initialValues, validateFunction) {
	const [formValues, setFormValues] = useState(initialValues);
	const [serverErrorMessage, setServerErrorMessage] = useState('');
	const [formErrorMessage, setFormErrorMessage] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	function onChange(e) {
		setFormValues((state) => ({
			...state,
			[e.target.name]: e.target.value
		}));
	}

	function onBlur(e){
		const currentErrors = validateFunction(e.target.name, e.target.value);
		setFormErrorMessage((state) => ({ ...state, ...currentErrors }));
	}

	async function onSubmit(e){
		e.preventDefault();
		try {
			setIsLoading(true);
			await submitHandler(formValues);
		} catch (error) {
			setServerErrorMessage(error.message);
		} finally {
			setIsLoading(false);
		}
	}

	function setChangedInitialValues(changedFormValues){
		setFormValues(changedFormValues);
	}

	return {
		formValues,
		formErrorMessage,
		serverErrorMessage,
		isLoading,
		onChange,
		onBlur,
		onSubmit,
		setChangedInitialValues
	};
}
