import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { loginSchema } from '@types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, url }) => {
	if (locals.DB.authStore.isValid) redirect(307, '/me');

	// Get OAuth methods available
	const authMethods = await (locals as any).DB.collection('users').listAuthMethods();
	const fail = url.searchParams.get('fail') === 'true';
	const {authProviders} = authMethods;
	// console.log(authProviders);
	return {
		authProviders,
		form: await superValidate(loginSchema)
	};
};
