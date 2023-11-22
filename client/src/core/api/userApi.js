import * as api from '../api/api.js'
import { endpoints } from '../environments/constants.js';

export async function login(email, password) {
	const user = await api.post(endpoints.login, { email, password });
	return user;
}

export async function register(email, password) {
	const user = await api.post(endpoints.register, { email, password });
	return user;
}

export async function logout() {
	api.get(endpoints.logout);
}