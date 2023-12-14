import { db } from '@server';
import type { PageServerLoad } from './$types';
import { Collections, userDetailsFormSchema } from '@types';
import { superValidate } from 'sveltekit-superforms/server';

export const load: PageServerLoad = async ({ parent, locals }) => {
	const details = await db
		.collection(Collections.UsersDetails)
		.getFirstListItem(`user="${locals.user?.id}"`);

	await parent();

	const form = await superValidate(details, userDetailsFormSchema);

	return {
		form
	};
};
