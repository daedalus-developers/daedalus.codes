import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { loginSchema } from '@types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.DB.authStore.isValid) redirect(307, '/me');
	return {
		form: await superValidate(loginSchema)
	};
};
