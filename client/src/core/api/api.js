import { host, tokenName } from '../environments/constants.js';

async function request(method, url, data) {
	const options = {
		method,
		headers: {}
	};

	const userData = JSON.parse(localStorage.getItem(tokenName));
	if (userData) {
		options.headers['X-Authorization'] = userData.accessToken;
	}

	if (data) {
		options.headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(data);
	}

	const response = await fetch(host + url, options);

	if (response.ok !== true) {
		if (response.status === 403) {
			localStorage.removeItem(tokenName);
		}
		const error = await response.json();
		throw new Error(error.message);
	}

	if (response.status === 204) {	
		return response;
	}
	
	return response.json();
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');
