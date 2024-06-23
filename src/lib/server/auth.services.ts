import { type UserRole, Collections, userRole, type User } from '@types';
import { db } from '.';
import type { ClientResponseError } from 'pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export const isExisting = async (
	collection: Collections,
	field: string,
	value: string
): Promise<boolean> =>
	await db
		.collection(collection)
		.getFirstListItem(`${field}="${value}"`)
		.then((result) => (result.id ? true : false))
		.catch((error) => {
			const err = error as ClientResponseError;
			if (err.status === 404) return false;
			return false;
		});

export const authenticateUser = (locals: App.Locals) => {
	return locals.DB.authStore.isValid && locals.DB.authStore.model
		? () => {
				locals.user = locals.DB.authStore.model;
				locals.user?.role === userRole.enum.user
					? () => {
							redirect(303, '/admin');
						}
					: () => {
							redirect(303, '/profile');
						};
			}
		: () => {
				throw fail(400, {});
			};
};

export const logout = (locals: App.Locals) => {
	locals.DB.authStore.clear();
	locals.user = undefined;

	return;
};

export const authenticationGuard = (locals: App.Locals) => {
	if (!locals.DB.authStore.isValid) redirect(303, '/login');
	if (!locals.DB.authStore.token) redirect(303, '/login');
	if (!locals.user?.id) redirect(303, '/login');

	return;
};

export const authorizationGuard = (locals: App.Locals, requiredRole: UserRole) => {
	if (!requiredRole !== locals.user?.role) redirect(307, '/unauthorized');

	return;
};

export const authRefresh = async (locals: App.Locals) => {
	await locals.DB.collection<User>(Collections.Users).authRefresh();
	authenticationGuard(locals);
	return;
};
