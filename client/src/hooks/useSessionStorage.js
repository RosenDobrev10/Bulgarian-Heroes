import { useState } from 'react';

import { tokenName } from '../core/environments/constants.js';

export default function useSessionStorage() {
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

	function setUserState({ accessToken, email, _id }) {
		if (accessToken) {
			localStorage.setItem(tokenName, JSON.stringify({ accessToken, email, _id }));
			setCurrentUserData({ accessToken, email, _id });
		}
	}

	function clearUserState() {
		localStorage.removeItem(tokenName);
		setCurrentUserData(null);
	}

	return {
		currentUserData,
		setUserState,
		clearUserState
	};
}
