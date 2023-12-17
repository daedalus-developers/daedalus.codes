import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { queryUser } from '@server/queries';

export const load: LayoutServerLoad = ({ locals }) => {
	if (!locals.DB.authStore.isValid && !locals.user) redirect(302, '/login');
	if (!locals.user) {
		redirect(302, '/login');
	} else {
		return {
			user: queryUser(locals.user.id)
		};
	}
};
