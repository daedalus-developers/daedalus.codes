import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { loginSchema } from '@types';
import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { Collections, type User } from '@types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.DB.authStore.isValid) redirect(307, '/me');

	return {
		authProviders: (await locals.DB.collection<User>(Collections.Users).listAuthMethods())
			?.authProviders,
		form: await superValidate(zod(loginSchema), { id: 'login' })
	};
};
