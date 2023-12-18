import type { PageServerLoad } from './$types';
import { queryProjects } from '@server/queries';

export const load: PageServerLoad = ({url}) => {

	const page = Number(url.searchParams.get('page')) || 1;
	const perPage = Math.min(Number(url.searchParams.get('perPage')) || 10, 50);

	return {
		projects: queryProjects(page, perPage)
	};
};
