import type { LayoutServerLoad } from './$types';
import { queryUser } from '@server/queries';
import { zod } from 'sveltekit-superforms/adapters';
import { subscriberFormSchema } from '@types';
import { superValidate } from 'sveltekit-superforms';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) {
		return {
			subscriberForm: await superValidate(zod(subscriberFormSchema), { id: 'subscribe' })
		};
	} else {
		return {
			user: await queryUser(locals.user.id),
			subscriberForm: await superValidate(zod(subscriberFormSchema), { id: 'subscribe' })
		};
	}
};
