import { emailPattern, loginFormKeys } from '../../core/environments/constants.js';

export default function loginValidation(inputName, inputValue) {
	if (inputName === loginFormKeys.email) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (emailPattern.test(inputValue) === false) {
			return { [inputName]: 'Невалиден формат !' };
		}
		return { [inputName]: '' };

	} else if (inputName === loginFormKeys.password) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (inputValue.length < 6) {
			return { [inputName]: 'Минимум 6 символа !' };
		}
		return { [inputName]: '' };
	}
}
