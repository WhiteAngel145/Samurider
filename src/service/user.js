import { api } from '../api/requester.js';
import { getUserData, setUserData, removeUserData } from '../utils/userUtils.js';

const endpoints = {
	register: '/users/register',
	login: '/users/login',
	logout: '/users/logout',
}

export async function register(data) {
	const result = await api.post(endpoints.register, data);
	setUserData(result);
	return result;
}

export async function login(data) {
	const result = await api.post(endpoints.login, data);
	setUserData(result);
	return result;
}

export async function logout() {
	const result = await api.get(endpoints.logout);
	removeUserData();
	return result;
}