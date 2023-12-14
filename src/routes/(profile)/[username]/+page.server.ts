import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { Collections, type User } from '@types';
import { db } from '@server';

export const load: PageServerLoad = async ({ params }) => {
	const { username } = params;

	if (username === 'admin') error(404, `Not found`);

	return {
		profile: await db.collection(Collections.Users).getFirstListItem<User>(`username="${username}"`)
	};
};
