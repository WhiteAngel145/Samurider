import { deleteMotorcycle } from '../service/data.js';
import page from '../lib/page.js';

export async function deleteView(ctx) {
	const idMotorcycle = ctx.params.id;
	if (!confirm('Are you sure you want to delete this motorcycle?')) {
		return;
	}
	await deleteMotorcycle(idMotorcycle);
	page.redirect('/dashboard');
}