import { logout } from "../service/user.js";
import page from "../lib/page.js";

export async function logoutView() {
	await logout();
	page.redirect('/');
}