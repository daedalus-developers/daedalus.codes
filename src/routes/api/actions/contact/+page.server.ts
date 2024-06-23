import { fail, redirect } from '@sveltejs/kit';
import { Collections, type Contact, contactFormSchema, subscriberFormSchema } from '@types';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions } from './$types';
import type { ClientResponseError } from 'pocketbase';
import { SOMETHING_WENT_WRONG } from '@utils';
import { db } from '@server';
import { zod } from 'sveltekit-superforms/adapters';

export const actions: Actions = {
	contact: async ({ request }) => {
		const form = await superValidate(request, zod(contactFormSchema));
		if (!form.valid) return fail(400, { form });

		try {
			await db.collection<Contact>(Collections.Contacts).create({
				...form.data
			});
			redirect(302, '/');
		} catch (e) {
			const err = e as ClientResponseError;
			return err.response.code !== 400
				? message(form, err.response)
				: message(form, SOMETHING_WENT_WRONG, {
						status: err.response.code
					});
		}
	},
	subscribe: async ({ request }) => {
		const form = await superValidate(request, zod(subscriberFormSchema));
		if (!form.valid) return fail(400, { form });
		try {
			await db.collection(Collections.Subscribers).create({
				...form.data
			});
			return { message: 'Thanks for subscribing!' };
		} catch (e) {
			const err = e as ClientResponseError;
			return err.response.code !== 400
				? message(form, err.response)
				: message(form, SOMETHING_WENT_WRONG, {
						status: err.response.code
					});
		}
	}
};
