import type { PageServerLoad } from './$types';
import type { Project, PaginatedTeam } from '@types';
import { fetchTeam, getAllProjects, getAllEvents } from '@server';

export const load: PageServerLoad = async () => {
	let projects: Project[] = [];
	let team: PaginatedTeam = {};
	let events;

	async function fetchPageData() {
		const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
		await delay(2000);

		const [teamData, projectData, eventsData] = await Promise.all([
			team = await fetchTeam(1, 3),
			projects = await getAllProjects(),
			events = await getAllEvents(1, 2)
		]);

		return {
			team: teamData,
			projects: projectData,
			events: eventsData
		};
	}

	return {
		test: 'test',
		streamed: {
			streamedData: fetchPageData()
		}
	};
};
