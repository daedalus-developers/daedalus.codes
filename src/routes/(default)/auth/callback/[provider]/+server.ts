import type { RequestHandler } from '@sveltejs/kit';
import { json, redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Collections, type User } from '@types';

export const GET: RequestHandler = async ({ locals, url, cookies }) => {
	const provider = JSON.parse(cookies.get('provider') || '{}');

	if (provider.state !== url.searchParams.get('state')) {
		throw new Error("State parameters don't match");
	}

	try {
		const res = await locals.DB.collection<User>(Collections.Users).authWithOAuth2Code(
			provider.name,
			url.searchParams.get('code') || '',
			provider.codeVerifier,
			env.OAUTH_REDIRECT_URL + provider.name
		);
		return json(res);
	} catch (error) {
		console.error(JSON.stringify(error));
		redirect(303, '/login?fail=true');
	}
};
