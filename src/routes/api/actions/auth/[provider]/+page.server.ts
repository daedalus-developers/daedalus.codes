import { Collections, type User } from '@types';
import type { Actions } from './$types';
import type { AuthProviderInfo } from 'pocketbase';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ cookies, url, locals, params }) => {
		const { provider } = params;

		const { authProviders } = await locals.DB.collection<User>(Collections.Users).listAuthMethods();

		const authProvider = authProviders.find((p: AuthProviderInfo) => p.name === provider);

		if (authProvider) {
			const authProviderRedirectURL = `${authProvider.authUrl}${url.origin}/api/actions/auth/${provider}/oauth`;
			const { state, codeVerifier } = authProvider;

			cookies.set('state', state, {
				path: '/'
			});

			cookies.set('verifier', codeVerifier, {
				path: '/'
			});

			redirect(303, authProviderRedirectURL);
		}
		// redirect(302, '/login');
	}
};
