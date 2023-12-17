import { queryTeamMembers } from '@server/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		team: queryTeamMembers()
	};
};
