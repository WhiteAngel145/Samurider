import { deleteMotorcycle } from '../service/data.js';
import page from '../lib/page.js';

export async function deleteView(idMotorcycle) {
	await deleteMotorcycle(idMotorcycle);
	page.redirect('/dashboard');
}