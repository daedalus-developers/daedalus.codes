import type { PageServerLoad } from './$types';
import { userFormSchema } from '@types';
import { superValidate } from 'sveltekit-superforms/server';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();

	const currentUser = await user;

	const form = await superValidate(currentUser, userFormSchema);
	return {
		user: currentUser,
		form
	};
};
