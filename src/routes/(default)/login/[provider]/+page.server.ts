import { Collections } from '@types';
import type { Actions, PageServerLoad } from './$types';
import type { AuthProviderInfo } from 'pocketbase';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	const { provider } = params;
	const { authProviders } = await locals.DB.collection(Collections.Users).listAuthMethods();

	const providers: string[] = [];

	for (const verifiedProvider of authProviders) {
		if (verifiedProvider.name === provider) {
			providers.push(verifiedProvider.name);
		}
	}

	return {
		providers
	};
};

export const actions: Actions = {
	default: async ({ cookies, url, locals, params }) => {
		const { provider } = params;

		const { authProviders } = await locals.DB.collection(Collections.Users).listAuthMethods();

		const authProvider = authProviders.find((p: AuthProviderInfo) => p.name === provider);

		if (authProvider) {
			const authProviderRedirectURL = `${authProvider.authUrl}${url.origin}/${provider}/oauth`;

			const { state, codeVerifier } = authProvider;

			cookies.set('state', state);
			cookies.set('verifier', codeVerifier);

			throw redirect(302, authProviderRedirectURL);
		}

		throw redirect(302, '/login');
	}
};
