import { db } from '@server';
import type { PageServerLoad } from './$types';
import { Collections, userDetailsFormSchema } from '@types';
import { superValidate } from 'sveltekit-superforms/server';

export const load: PageServerLoad = async ({ parent, locals }) => {
	await parent();
	console.log(Collections.UsersDetails)
	const details = await db
		.collection(Collections.UsersDetails)
		.getFirstListItem(`user="${locals.user?.id}"`);

	const form = await superValidate(details, userDetailsFormSchema);

	return {
		form
	};
};
