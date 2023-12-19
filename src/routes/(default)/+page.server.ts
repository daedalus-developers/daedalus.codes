import type { PageServerLoad } from './$types';
import { queryEvents, queryProjects, queryUsersByRole } from '@server/queries';

export const load: PageServerLoad = async () => {
	return {
		team: queryUsersByRole('team'),
		projects: queryProjects(),
		events: queryEvents(1, 3)
	};
};
