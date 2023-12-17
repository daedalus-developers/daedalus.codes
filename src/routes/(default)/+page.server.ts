import type { PageServerLoad } from './$types';
import { queryEvents, queryProjects, queryTeamMembers } from '@server/queries';

export const load: PageServerLoad = async () => {
	return {
		team: queryTeamMembers(),
		projects: queryProjects(),
		events: queryEvents()
	};
};
