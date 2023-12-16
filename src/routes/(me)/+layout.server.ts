import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getUser } from '@server/queries';

export const load: LayoutServerLoad = ({ locals }) => {
	if (!locals.DB.authStore.isValid && !locals.user) redirect(302, '/login');

	if (!locals.user) {
		redirect(302, '/login');
	} else {
		const id: string = locals.user.id;
		return {
			user: getUser(id)
		};
	}
};
