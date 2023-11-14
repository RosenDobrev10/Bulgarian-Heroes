import * as api from './api.js/index.js'
import { endpoints } from '../environments/constants.js';

import { clearUserData, setUserData } from '../../util/userSession.jsx';


export async function login(email, password) {
	const user = await api.post(endpoints.login, { email, password });
	setUserData(user);
	return user;
}

export async function register(email, password) {
	const user = await api.post(endpoints.register, { email, password });
	setUserData(user);
	return user;
}

export async function logout() {
	api.get(endpoints.logout);
	clearUserData();
}