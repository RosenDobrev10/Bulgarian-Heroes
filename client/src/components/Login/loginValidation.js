import { loginFormKeys } from '../../core/environments/constants.js';

const pattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

export default function loginValidation(inputName, inputValue) {
	if (inputName === loginFormKeys.email) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително!' };
		} else if (pattern.test(inputValue) === false) {
			return { [inputName]: 'Невалиден формат!' };
		} else {
			return { [inputName]: '' };
		}
	} else if (inputName === loginFormKeys.password) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително!' };
		} else if (inputValue.length < 6) {
			return { [inputName]: 'Паролата е къса!' };
		} else {
			return { [inputName]: '' };
		}
	}
}
