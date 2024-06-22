import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from './$types';
import { queryEvents, queryProjects, queryUsersByRole } from '@server/queries';

export const load: PageServerLoad = async () => {
	return {
		team: queryUsersByRole(1, 3, 'team'),
		projects: queryProjects(1, 3),
		events: queryEvents(1, 3),
	};
};
