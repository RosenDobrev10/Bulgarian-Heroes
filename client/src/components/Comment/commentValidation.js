export default function commentValidation(inputName, inputValue) {
	if (inputName === 'comment') {
		if (inputValue === '') {
			return { [inputName]: 'Полето е задължително !' };
		} else if (inputValue.length > 200) {
			return { [inputName]: 'Максимум 200 символа !' };
		}
		return { [inputName]: '' };
    }
}