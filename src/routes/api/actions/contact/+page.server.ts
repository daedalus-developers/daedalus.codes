import { fail } from '@sveltejs/kit';
import { contactSchema } from '@types';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, contactSchema);
		if (!form.valid) return fail(400, { form });

		const { firstName, lastName, email, phoneNumber, message } = form.data;
		console.log(
			'🚀 ~ file: +page.server.ts:29 ~ contact: ~ firstName, lastName, email, phoneNumber, message:',
			firstName,
			lastName,
			email,
			phoneNumber,
			message
		);

		// TODO: create a record in the database
	}
};
