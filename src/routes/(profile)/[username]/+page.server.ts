import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { Collections } from '@types';

export const load: PageServerLoad = async ({ locals, params }) => {
	const { username } = params;

	if (username === 'admin') throw error(404, `Not found`);

	return {
		profile: await locals.DB.collection(Collections.Users).getOne(username, { $autoCancel: false })
	};
};
