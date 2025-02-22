import { deleteMotorcycle } from '../service/data.js';
import page from '../lib/page.js';

export async function deleteView(ctx) {
	const idMotorcycle = ctx.params.id;
	await deleteMotorcycle(idMotorcycle);
	page.redirect('/dashboard');
}