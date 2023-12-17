import type { LayoutServerLoad } from './$types';
import { queryUser } from '@server/queries';

export const load: LayoutServerLoad = ({ locals }) => {
	if (!locals.user) {
		return {};
	} else {
		return {
			user: queryUser(locals.user.id)
		};
	}
};
