import { api } from '../api/requester.js';

const endpoints = {
	dashboard: '/data/motorcycles?sortBy=_createdOn%20desc',
	create: '/data/motorcycles',
	details: (idMotorcycle) => `/data/motorcycles/${idMotorcycle}`,
	edit: (idMotorcycle) => `/data/motorcycles/${idMotorcycle}`,
	delete: (idMotorcycle) => `/data/motorcycles/${idMotorcycle}`,
	search: (query) => `/data/motorcycles?where=model%20LIKE%20%22${query}%22`,
}

export async function getAllMotorcycles() {
	return await api.get(endpoints.dashboard);
}

export async function getMotorcycleById(idMotorcycle) {
	return await api.get(endpoints.details(idMotorcycle));
}

export async function createMotorcycle(data) {
	return await api.post(endpoints.create, data);
}

export async function editMotorcycle(idMotorcycle, data) {
	return await api.put(endpoints.edit(idMotorcycle), data);
}

export async function deleteMotorcycle(idMotorcycle) {
	return await api.del(endpoints.delete(idMotorcycle));
}

export async function searchMotorcycles(query) {
	return await api.get(endpoints.search(query));
}