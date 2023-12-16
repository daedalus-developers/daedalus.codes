import type { LayoutServerLoad } from './$types';
import { getUser } from '@server/queries';

export const load: LayoutServerLoad = ({ locals }) => {
	if (!locals.user) {
		return {};
	} else {
		const id: string = locals.user.id;
		return {
			user: getUser(id)
		};
	}
};
