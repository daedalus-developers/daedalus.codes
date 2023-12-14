import { superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from './$types';
import { contactSchema } from '@types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(contactSchema)
	};
};
