import { queryUsersByRole } from '@server/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		team: queryUsersByRole(1, 6, 'team')
	};
};
