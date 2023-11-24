import { addFormKeys } from '../../core/environments/constants.js';

export default function addValidation(inputName, inputValue) {
	if (inputName === addFormKeys.name) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (inputValue.length < 2) {
			return { [inputName]: 'Минимум 2 символа !' };
		}
		return { [inputName]: '' };

	} else if (inputName === addFormKeys.imageUrl) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		}
		return { [inputName]: '' };

	} else if (inputName === addFormKeys.occupation) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (inputValue.length < 2) {
			return { [inputName]: 'Минимум 2 символа !' };
		}
		return { [inputName]: '' };

	} else if (inputName === addFormKeys.birthplace) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (inputValue.length < 2) {
			return { [inputName]: 'Минимум 2 символа !' };
		}
		return { [inputName]: '' };

	} else if (inputName === addFormKeys.born) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (Number(inputValue) > 2023) {
			return { [inputName]: 'Невалидна година !' };
		} else if (isNaN(inputValue)){
			return { [inputName]: 'Въведете година !' };
		}
		return { [inputName]: '' };

	} else if (inputName === addFormKeys.description) {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (inputValue.length < 10) {
			return { [inputName]: 'Минимум 10 символа !' };
		}  else if (inputValue.length > 500) {
			return { [inputName]: 'Максимум 500 символа !' };
		}
		return { [inputName]: '' };
	}
}
