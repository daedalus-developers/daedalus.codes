import { redirect, error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { queryUser } from '@server/queries';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.DB.authStore.isValid && !locals.user) error(401, 'Unauthorized');
	if (!locals.user) {
		redirect(307, '/login');
	} else {
		return {
			user: await queryUser(locals.user.id)
		};
	}
};
