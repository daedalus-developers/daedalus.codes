import { superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from './$types';
import { registerSchema } from '@types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(registerSchema)
	};
};
