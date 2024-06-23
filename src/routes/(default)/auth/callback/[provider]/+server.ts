import type { RequestHandler } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async ({ locals, url, cookies }) => {
	const provider = JSON.parse(cookies.get('provider') || '{}');

	if (provider.state !== url.searchParams.get('state')) {
		throw new Error("State parameters don't match");
	}

	try {
		const res = await locals.DB.collection('users').authWithOAuth2Code(
			provider.name,
			url.searchParams.get('code') || '',
			provider.codeVerifier,
			env.OAUTH_REDIRECT_URL + provider.name
		);
	} catch (error) {
		console.error(JSON.stringify(error));
		redirect(303, '/login?fail=true');
	}

	redirect(303, '/login');
};
