import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { user, avatar } = await parent();

	return {
		user,
		avatar
	};
};
