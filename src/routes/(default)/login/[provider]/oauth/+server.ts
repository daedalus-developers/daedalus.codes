import { Collections } from '@types';
import type { RequestHandler } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies, url, locals, params }) => {
	const { provider } = params;

	const { authProviders } = await locals.DB.collection(Collections.Users).listAuthMethods();
	if (!authProviders) {
		throw redirect(303, '/login');
	}

	const redirectURL = `${url.origin}/${provider}/oauth`;
	const pocketbaseState = cookies.get('state') ?? '';
	const pocketbaseVerifier = cookies.get('verifier') ?? '';

	const state = url.searchParams.get('state') ?? '';
	const code = url.searchParams.get('code') ?? '';

	if (state !== pocketbaseState) {
		throw redirect(303, '/login');
	}

	try {
		await locals.DB.collection(Collections.Users).authWithOAuth2Code(
			provider,
			code,
			pocketbaseVerifier,
			redirectURL
		);
	} catch (err) {
		throw error(404, err as unknown as string);
	}
	throw redirect(303, '/login');
};
