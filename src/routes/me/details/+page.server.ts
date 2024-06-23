import { db } from '@server';
import type { PageServerLoad } from './$types';
import { Collections, userDetailsFormSchema, type UserDetails } from '@types';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async ({ parent, locals }) => {
	await parent();
	const details = await db
		.collection<UserDetails>(Collections.UsersDetails)
		.getFirstListItem(`user="${locals.user?.id}"`);

	const form = await superValidate(details, zod(userDetailsFormSchema));

	return {
		form
	};
};
