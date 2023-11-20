/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { useSessionStorage } from '../hooks/useSessionStorage.js';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	// create AuthProvider so we can use it everywhere in our app(put AuthProvider around all other components)
	const sessionManager = useSessionStorage();

	const contextValues = {
		addUserSession: (userData) => sessionManager.setUserState(userData),
		clearUserSession: () => sessionManager.clearUserState(),
		getUserToken: sessionManager.currentUserToken,
		getUserDetails: sessionManager.currentUserData,
		isLoggedIn: !!sessionManager.currentUserToken
	};

	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	);
};