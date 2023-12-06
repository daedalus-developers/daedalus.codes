import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	const { username } = params;

	if (username === 'admin') throw redirect(303, '/me');
};
