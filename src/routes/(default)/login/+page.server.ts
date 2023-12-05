import type { Actions, PageServerLoad } from './$types';
import { message, superValidate } from 'sveltekit-superforms/server';
import { loginSchema } from '@types';
import { isExisting } from '@server/auth.services';
import { Collections } from '@types';
import { INVALID_CREDENTIALS, SOMETHING_WENT_WRONG } from '@utils';
import type { ClientResponseError } from 'pocketbase';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = () => {
	return {
		form: superValidate(loginSchema)
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, loginSchema);

		if (!form.valid) return message(form, 'Please fill in all required fields');

		const { key, password } = form.data;

		// let userExists = await isExisting(Collections.Users, 'username', key);
		//
		// userExists = await isExisting(Collections.Users, 'email', key);
		//
		// if (!userExists) return message(form, INVALID_CREDENTIALS);

		try {
			const authData = await locals.DB.collection(Collections.Users).authWithPassword(
				key,
				password
			);
			console.log(authData);
		} catch (error) {
			const err = error as ClientResponseError;
			console.log(err);
			return err.response.code !== 400
				? message(form, INVALID_CREDENTIALS)
				: message(form, SOMETHING_WENT_WRONG, {
						status: err.response.code
				  });
		}

		if (locals.DB.authStore.isValid && locals.DB.authStore.model) {
			locals.user = locals.DB.authStore.model;
			throw redirect(302, '/me');
		}

		return message(form, `Bad Request`);
	}
};
