import type { LayoutServerLoad } from './$types';
import { queryUser } from '@server/queries';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) {
		return {};
	} else {
		return {
			user: await queryUser(locals.user.id)
		};
	}
};
