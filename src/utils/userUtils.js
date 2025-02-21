
export function setUserData(data) {
	localStorage.setItem('userData', JSON.stringify(data));
}

export function getUserData() {
	let userData = localStorage.getItem('userData');
	userData = JSON.parse(userData);
	return userData;
}

export function removeUserData() {
	localStorage.clear();
}
