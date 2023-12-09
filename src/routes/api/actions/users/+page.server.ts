import { Collections, userDetailsFormSchema, userFormSchema, type User } from '@types';
import type { Actions } from './$types';
import { message, superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import type { ClientResponseError } from 'pocketbase';
import { INVALID_CREDENTIALS, SOMETHING_WENT_WRONG } from '@utils';
import { db } from '@server';

export const actions: Actions = {
	account: async ({ request, locals }) => {
		const userForm = await superValidate(request, userFormSchema);
		if (!userForm.valid) return fail(400, { userForm });

		try {
			if (locals.user)
				await locals.DB.collection(Collections.Users).update(locals.user.id, userForm.data);

			// Return sucess here
		} catch (error) {
			const err = error as ClientResponseError;
			return err.response.code !== 400
				? message(userForm, INVALID_CREDENTIALS)
				: message(userForm, err.message, {
						status: err.response.code
				  });
		}

		// Misleading return fail
		return fail(404, { userForm });
	},
	details: async ({ request, locals }) => {
		const userDetailsForm = await superValidate(request, userDetailsFormSchema);

		if (!userDetailsForm.valid) return fail(400, { userDetailsForm });

		// const linkBuilder = (domain: string, username: string) => `https://${domain}/${username}`

		try {
			if (locals.user) {
				const { id } = locals.user;

				// Use server instance to query
				const details = await db
					.collection(Collections.UsersDetails)
					.getFirstListItem(`user="${id}"`);

				// use client instance to update
				await locals.DB.collection(Collections.UsersDetails).update(details.id, {
					...userDetailsForm.data,
					user: id,
					updated: new Date()
				});
			}
		} catch (error) {
			const err = error as ClientResponseError;
			console.log(err.message);
			return err.response.code !== 400
				? message(userDetailsForm, INVALID_CREDENTIALS)
				: message(userDetailsForm, err.message, {
						status: err.response.code
				  });
		}

		// Misleading
		return fail(404, { userDetailsForm });
	},
	updateAvatar: async ({ request, locals }) => {
		const formData = await request.formData();

		const id = formData.get('id') as string;
		const avatar = formData.get('avatar');

		if (avatar instanceof File && locals.user) {
			const { id: userId } = await db.collection<User>(Collections.Users).update(id, {
				avatar
			});
			if (userId) return { success: true };
		}

		return fail(400, {
			message: SOMETHING_WENT_WRONG
		});
	}
};
