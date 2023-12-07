import { Collections, userDetailsForm, userFormSchema, type User } from '@types';
import type { Actions } from './$types';
import { message, superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import type { ClientResponseError } from 'pocketbase';
import { INVALID_CREDENTIALS, SOMETHING_WENT_WRONG } from '@utils';
import { db } from '@server';

export const actions: Actions = {
	account: async ({ request, locals }) => {
		const form = await superValidate(request, userFormSchema);
		if (!form.valid) return fail(400, { form });

		try {
			if (locals.user)
				await locals.DB.collection(Collections.Users).update(locals.user.id, form.data);
		} catch (error) {
			const err = error as ClientResponseError;
			return err.response.code !== 400
				? message(form, INVALID_CREDENTIALS)
				: message(form, err.message, {
						status: err.response.code
				  });
		}
		return { form };
	},
	updateDetails: async ({ request, locals }) => {
		const form = await superValidate(request, userDetailsForm);
		if (!form.valid) return fail(400, { form });
		try {
			if (locals.user) {
				const { id } = locals.user;
				const details = await locals.DB.collection(Collections.UsersDetails).getFirstListItem(
					`user="${id}"`
				);
				await locals.DB.collection(Collections.UsersDetails).update(details.id, form.data);
			}
		} catch (error) {
			const err = error as ClientResponseError;
			return err.response.code !== 400
				? message(form, INVALID_CREDENTIALS)
				: message(form, err.message, {
						status: err.response.code
				  });
		}
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
