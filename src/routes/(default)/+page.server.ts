import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from './$types';
import { queryEvents, queryProjects, queryUsersByRole } from '@server/queries';
import { zod } from 'sveltekit-superforms/adapters';
import { subscriberFormSchema } from '@types';

export const load: PageServerLoad = async () => {
	return {
		team: queryUsersByRole(1, 3, 'team'),
		projects: queryProjects(1, 3),
		events: queryEvents(1, 3),
		subscriberForm: await superValidate(zod(subscriberFormSchema), { id: 'subscribe' })
	};
};
