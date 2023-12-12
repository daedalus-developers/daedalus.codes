import type { PageServerLoad } from './$types';
import type { Project, PaginatedTeam } from '@types';
import { fetchTeam, getAllProjects } from '@server';

export const load: PageServerLoad = async () => {
	let projects: Project[] = [];
	let team: PaginatedTeam = {};

	// PROJECTS
	try {
		projects = await getAllProjects();
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}

	// TEAM & USER DETAILS
	try {
		const pageNumber = 1;
		const perPage = 3;
		team = await fetchTeam(pageNumber, perPage);
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}

	return {
		projects,
		team
	};
};
