import { useEffect, useState } from 'react';

export default function useForm(submitHandler, initialValues, validateFunction) {
	const [formValues, setFormValues] = useState(initialValues);
	const [serverErrorMessage, setServerErrorMessage] = useState('');
	const [formErrorMessage, setFormErrorMessage] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isInvalidForm, setIsInvalidForm] = useState(true);

	useEffect(() => {
		validateForm()
	}, [formErrorMessage]);
	
	function onChange(e) {
		setFormValues((state) => ({
			...state,
			[e.target.name]: e.target.value
		}));
	}
	
	function onBlur(e){
		const currentErrors = validateFunction(e.target.name, e.target.value);
		setFormErrorMessage((state) => ({ ...state, ...currentErrors }));
		validateForm();
	}
	
	async function onSubmit(e){
		e.preventDefault();
		try {
			setIsLoading(true);
			await submitHandler(formValues);
			setFormValues((state) => {
				const newState = {};
				Object.keys(state).forEach(key => newState[key] = '');
				return newState;
			});  
		} catch (error) {
			setServerErrorMessage(error.message);
		} finally {
			setIsLoading(false);
		}
	}
	
	function validateForm(){
		setIsInvalidForm(
			Object.values(formValues).some(value => value === '') || 
			Object.values(formErrorMessage).some(error => error)
			);
	}

	function setChangedInitialValues(changedFormValues){
		setFormValues(changedFormValues);
	}

	return {
		formValues,
		formErrorMessage,
		serverErrorMessage,
		isLoading,
		isInvalidForm,
		onChange,
		onBlur,
		onSubmit,
		setChangedInitialValues,
	};
}
