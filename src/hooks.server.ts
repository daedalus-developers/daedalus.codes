import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/public';
import { Collections } from '@types';

export const handle: Handle = async ({ event, resolve }) => {
	const USER_DB = new PocketBase(env.PUBLIC_PB_URL);

	event.locals.DB = USER_DB;

	event.locals.DB.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		event.locals.DB.authStore.isValid &&
			(await event.locals.DB.collection(Collections.Users).authRefresh());
		event.locals.user = { ...event.locals.DB.authStore.model };
	} catch (error) {
		event.locals.DB.authStore.clear();
	}
	const response = await resolve(event);

	// response.headers.set('set-cookie', event.locals.DB.authStore.exportToCookie());
	response.headers.append('set-cookie', event.locals.DB.authStore.exportToCookie({ 
    sameSite: 'Lax'
    })
  );

	return response;
};
