/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSessionStorage } from '../hooks/useSessionStorage.js';
import { login, logout, register } from '../core/api/userApi.js';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	// create AuthProvider so we can use it everywhere in our app(put AuthProvider around all other components)
	const sessionManager = useSessionStorage();
	const navigate = useNavigate();

	const loginSubmitHandler = async (formValues) => {
		try {
			const result = await login(formValues.email, formValues.password);
			sessionManager.setUserState(result);
			navigate('/heroes');
		} catch (error) {
			console.log(error.message);
		}
	};

	const registerSubmitHandler = async (formValues) => {
		try {
			if (formValues.password === formValues.repass) {
				const result = await register(formValues.email, formValues.password);
				sessionManager.setUserState(result);
				navigate('/heroes');
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	const logoutHandler = async () => {
		try {
			await logout();
			sessionManager.clearUserState();
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};

	const contextValues = {
		addUserSession: (userData) => sessionManager.setUserState(userData),
		clearUserSession: () => sessionManager.clearUserState(),
		getUserToken: sessionManager.currentUserData?.accessToken,
		getUserEmail: sessionManager.currentUserData?.email,
		getUserId: sessionManager.currentUserData?._id,
		isLoggedIn: !!sessionManager.currentUserData?.accessToken,
		loginSubmitHandler,
		registerSubmitHandler,
		logoutHandler
	};

	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	);
};
