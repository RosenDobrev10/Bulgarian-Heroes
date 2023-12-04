export default function commentValidation(inputName, inputValue) {
	if (inputName === 'comment') {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (inputValue.length > 100) {
			return { [inputName]: 'Максимум 100 символа !' };
		}
		return { [inputName]: '' };
    }
}