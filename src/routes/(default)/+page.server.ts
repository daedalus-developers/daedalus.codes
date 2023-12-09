import { db } from '@server';
import type { PageServerLoad } from './$types';
import type { Project } from '@types';

export const load: PageServerLoad = async () => {
	let projects: Project[] = [];

	try {
		projects = await db.collection('projects').getFullList({
			sort: 'created'
		});
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}

	return {
		projects
	};
};
