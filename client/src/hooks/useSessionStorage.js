import { useState } from 'react';
import { tokenName } from '../core/environments/constants.js'

export const useSessionStorage = () => {
	// User data is saved in context to easy use in app: { _id, username, email }
	const [currentUserData, setCurrentUserData] = useState({});

	// Initial user token is saved in local storage -> can be null or accessToken
	const [currentUserToken, setCurrentUserToken] = useState(() => {
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
			setCurrentUserToken(userData.accessToken); // Token is used to make requests to the server
			setCurrentUserData(userData.userDetails); // User data is used to get needed properties in entire app using a context
		}
	};

	const clearUserState = () => {
		localStorage.removeItem(tokenName);
		setCurrentUserToken(null); 
		setCurrentUserData({});
	};

	return {
		setUserState,
		clearUserState,
		currentUserToken,
		currentUserData
	};
};
