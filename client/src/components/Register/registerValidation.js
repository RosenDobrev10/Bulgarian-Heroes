import { registerFormKeys } from '../../core/environments/constants.js';

const pattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

export default function registerValidation(inputName, inputValue) {
	if (inputName === registerFormKeys.email) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (pattern.test(inputValue) === false) {
			return { [inputName]: 'Невалиден формат !' };
		}
		return { [inputName]: '' };
	} else if (inputName === registerFormKeys.password) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (inputValue.length < 6) {
			return { [inputName]: 'Минимум 6 символа !' };
		}
		return { [inputName]: '' };
	} else if (inputName === registerFormKeys.repass) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (inputValue.length < 6) {
			return { [inputName]: 'Минимум 6 символа !' };
		}
		return { [inputName]: '' };
	}
}
