import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { loginSchema } from '@types';

export const load: PageServerLoad = () => {
	return {
		form: superValidate(loginSchema)
	};
};
