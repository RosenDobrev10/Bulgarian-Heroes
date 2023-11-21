import { useState } from 'react';
import { tokenName } from '../core/environments/constants.js'

export const useSessionStorage = () => {
	// Initial user token is saved in local storage -> can be null or accessToken
	const [currentUserData, setCurrentUserData] = useState(() => {
		try {
			// Verify that the data in the local storage is in the correct format
			const localStorageData = JSON.parse(localStorage.getItem(tokenName));
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

	const setUserState = (userData) => {
		// If has a userData set new user state and user data
		if (userData) {
			localStorage.setItem(tokenName, JSON.stringify(userData.accessToken));
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
		currentUserData,
	};
};
