import type { PageServerLoad } from './$types';
import type { PaginatedTeam } from '@types';
import { fetchTeam } from '@server';

export const load: PageServerLoad = async () => {
	let team: PaginatedTeam = {};

	try {
		const pageNumber = 1;
		const perPage = 10;
		team = await fetchTeam(pageNumber, perPage);
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}

	return {
		team
	};
};
