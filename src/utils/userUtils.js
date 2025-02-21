

export function setUserData(data) {
	localStorage.setItem('userData', JSON.stringify(data));
}

export function getUserData() {
	const data = localStorage.getItem('userData');
	return data ? JSON.parse(data) : null;
}

export function removeUserData() {
	localStorage.removeItem('userData');
}
