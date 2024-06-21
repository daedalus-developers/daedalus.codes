import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { loginSchema } from '@types';
import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async ({ request, locals }) => {
	if (locals.DB.authStore.isValid) redirect(307, '/me');

	// Get OAuth methods available
	// const authMethods = await locals.DB.collection('users').listAuthMethods();
	// const fail = url.searchParams.get('fail') === 'true';
	// const { authProviders } = authMethods;
	// console.log(authProviders);
	return {
		authProviders: (await locals.DB.collection('users').listAuthMethods())?.authProviders,
		form: await superValidate(zod(loginSchema), { id: 'login' })
	};
};
