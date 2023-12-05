import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.DB.authStore.isValid) throw redirect(302, '/login');

	return {};
};
