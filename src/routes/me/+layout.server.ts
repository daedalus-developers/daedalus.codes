import { redirect, error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { queryUser } from '@server/queries';
import { db } from '@server';
import { createInitialUserDetails } from '@server/queries/createInitialUserDetails';
import { Collections, type UserDetails } from '@types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.DB.authStore.isValid && !locals.user) error(401, 'Unauthorized');

	// CHECK IF THE LOGGED IN USER HAS A USER PROFILE. IF NOT CREATE ONE
	if (locals.user) {
		console.log('yes');
		await db
			.collection<UserDetails>(Collections.UsersDetails)
			.getList(1, 2, {
				filter: `user = "${locals.user.id}"`
			})
			.then((res) => {
				const isExist = res.items.length > 0;
				console.log(isExist);
				if (!isExist) {
					createInitialUserDetails(locals.user!.id);
				}
			});
	}

	if (!locals.user) {
		redirect(307, '/login');
	} else {
		return {
			user: await queryUser(locals.user.id)
		};
	}
};
