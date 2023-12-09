import type { PageServerLoad } from './$types';
import { userDetailsFormSchema, userFormSchema } from '@types';
import { superValidate } from 'sveltekit-superforms/server';

export const load: PageServerLoad = async ({ parent }) => {
	const { user, avatar } = await parent();

	const userForm = await superValidate(user, userFormSchema);
	const userDetailsForm = await superValidate(user, userDetailsFormSchema);

	return {
		user,
		avatar,
		userForm,
		userDetailsForm
	};
};
