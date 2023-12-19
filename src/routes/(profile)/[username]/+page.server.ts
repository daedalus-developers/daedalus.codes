import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { queryUserByUsername } from '@server/queries';

export const load: PageServerLoad = ({ params }) => {
	const { username } = params;
	if (username === 'admin') error(404, `Not found`);
	return {
		query: queryUserByUsername(username)
	};
};
