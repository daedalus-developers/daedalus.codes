import { superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from './$types';
import { registerSchema } from '@types';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(registerSchema), { id: 'register' })
	};
};
