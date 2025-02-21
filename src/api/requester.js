import { getUserData, removeUserData } from "../utils/userUtils.js";

const baseUrl = 'http://localhost:3030';

async function requester(method, url, data) {
	
	const options = {
		method,
		headers: {}
	};

	if (data !== undefined) {
		options.headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(data);
	}

	const userData = getUserData();

	if (userData) {
		options.headers['X-Authorization'] = userData.accessToken;
	}

	try {
		const response = await fetch(baseUrl + url, options);
		if (!response.ok) {
			const error = await response.json();

			if (response.status === 403 && error.message === 'Invalid access token') {
				alert('Invalid session, resetting...');
				removeUserData();
			}
			throw error.message;
		}

		if (response.status === 204) {
			return;
		}
		return response.json();
	} catch (error) {
		alert(error.message);
		throw error;
	}
}

export const api = {
	get: (url) => requester('GET', url),
	post: (url, data) => requester('POST', url, data),
	put: (url, data) => requester('PUT', url, data),
	del: (url) => requester('DELETE', url)
}