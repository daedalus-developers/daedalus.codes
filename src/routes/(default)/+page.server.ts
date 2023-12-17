import type { PageServerLoad } from './$types';
import { queryEvents, queryProjects, queryTeam } from '@server/queries';

export const load: PageServerLoad = async () => {
	return {
		team: queryTeam(),
		projects: queryProjects(),
		events: queryEvents()
	};
};
