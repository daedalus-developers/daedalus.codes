import { message as formMessage, setError, superValidate } from 'sveltekit-superforms/server';
import { setFlash } from 'sveltekit-flash-message/server';
import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { Collections, registerSchema } from '@types';
import { isExisting } from '@server/auth.services';
import { db } from '@server';
import { SOMETHING_WENT_WRONG } from '@utils';
import type { ClientResponseError } from 'pocketbase';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(registerSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event.request, registerSchema);

		if (!form.valid) return fail(400, { form });

		const { username, email } = form.data;

		const isUserNameTaken = await isExisting(Collections.Users, 'username', username);
		if (isUserNameTaken) {
			setFlash({ type: 'error', message: 'Username is already taken.' }, event);
			return setError(form, 'username', 'Username is already taken.');
		}

		const isEmailTaken = await isExisting(Collections.Users, 'email', email);
		if (isEmailTaken) {
			setFlash({ type: 'error', message: 'Email is already taken.' }, event);
			return setError(form, 'email', 'Email is already taken.');
		}

		try {
			await db.collection(Collections.Users).create({
				...form.data,
				role: 'user'
			});
		} catch (error) {
			const err = error as ClientResponseError;
			return err.response.code !== 400
				? formMessage(form, err.response)
				: formMessage(form, SOMETHING_WENT_WRONG, {
						status: err.response.code
				  });
		}
		setFlash(
			{ type: 'success', message: 'Account created. Please login with your credentials.' },
			event
		);
		throw redirect(303, '/login');
	}
};
