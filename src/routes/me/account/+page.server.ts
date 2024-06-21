import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { userFormSchema } from '@types';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();

	if (!user) redirect(307, '/login');

	const form = await superValidate(user, zod(userFormSchema));

	return {
		user,
		form
	};
};
