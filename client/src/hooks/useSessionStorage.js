import { useState } from 'react';
import { tokenName } from '../core/environments/constants.js';

export const useSessionStorage = () => {
	// Initial user token is saved in local storage -> can be null or accessToken
	const [currentUserData, setCurrentUserData] = useState(() => {
		try {
			// Verify that the data in the local storage is in the correct format
			const localStorageData = JSON.parse(
				localStorage.getItem(tokenName)
			);
			if (localStorageData) {
				return localStorageData;
			}
		} catch (error) {
			console.error(error);
			return null;
		}
		// Default value
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
		setUserState,
		clearUserState,
		currentUserData
	};
};
