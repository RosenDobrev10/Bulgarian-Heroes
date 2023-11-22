import { useState } from 'react';
import { tokenName } from '../core/environments/constants.js';

export const useSessionStorage = () => {
	const [currentUserData, setCurrentUserData] = useState(() => {
		try {
			const localStorageData = JSON.parse(localStorage.getItem(tokenName));
			if (localStorageData) {
				return localStorageData;
			}
		} catch (error) {
			console.error(error);
			return null;
		}
		return null;
	});

	const setUserState = ({ accessToken, email, _createdOn, _id }) => {
		if (accessToken) {
			const userData = { accessToken, email, _createdOn, _id };
			localStorage.setItem(tokenName, JSON.stringify(userData));
			setCurrentUserData(userData);
		}
	};

	const clearUserState = () => {
		localStorage.removeItem(tokenName);
		setCurrentUserData(null);
	};

	return {
		currentUserData,
		setUserState,
		clearUserState,
	};
};
