import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { queryUserByUsername } from '@server/queries';

export const load: PageServerLoad = async ({ params }) => {
	const { username } = params;
	if (username === 'admin') error(404, `Not found`);

	const query = await queryUserByUsername(username);

	if (!query) error(404, `Not found`);

	return {
		query
	};
};
