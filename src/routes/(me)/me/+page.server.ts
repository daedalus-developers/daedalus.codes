import { db } from '@server';
import type { PageServerLoad } from './$types';
import { Collections, userDetailsFormSchema, userFormSchema } from '@types';
import { superValidate } from 'sveltekit-superforms/server';

export const load: PageServerLoad = async ({ parent }) => {
	const { user, avatar } = await parent();
	const details = await db
		.collection(Collections.UsersDetails)
		.getFirstListItem(`user="${user.id}"`);

	const userForm = await superValidate(user, userFormSchema);
	const userDetailsForm = await superValidate(details, userDetailsFormSchema);

	return {
		user,
		avatar,
		userForm,
		userDetailsForm
	};
};
