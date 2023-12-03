import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { PUBLIC_PB_URL } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
	const USER_DB = new PocketBase(PUBLIC_PB_URL);

	event.locals.DB = USER_DB;

	event.locals.DB.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		event.locals.DB.authStore.isValid && (await event.locals.DB.collection('users').authRefresh());
		event.locals.user = { ...event.locals.DB.authStore.model };
	} catch (error) {
		event.locals.DB.authStore.clear();
	}
	const response = await resolve(event);
	response.headers.set('set-cookie', event.locals.DB.authStore.exportToCookie());

	return response;
};
