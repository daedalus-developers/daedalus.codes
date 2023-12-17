import type { PageServerLoad } from './$types';
import { queryProjects } from '@server/queries';

export const load: PageServerLoad = () => {
	return {
		projects: queryProjects()
	};
};
