import { db } from '@server';
import type { PageServerLoad } from './$types';
import type { User, Project, UserDetails, Team } from '@types';

export const load: PageServerLoad = async () => {
	let projects: Project[] = [];
	let team: Team[] = [];

	// PROJECTS
	try {
		const projectList = (await db.collection('projects').getFullList({
			sort: 'created'
		})) as Project[];

		projects = projectList.map((project) => {
			return {
				...project,
				preview: db.files.getUrl(project, project.preview)
			};
		});
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}

	// TEAM & USER DETAILS
	try {
		const users = (await db.collection('users').getFullList({
			sort: 'created',
			filter: 'role="team"'
		})) as User[];

		const userDetails = (await db.collection('users_details').getFullList({
			sort: 'created'
		})) as UserDetails[];

		team = users.map((user) => {
			return {
				...user,
				avatar: db.files.getUrl(user, user.avatar),
				userDetails: userDetails.find((detail) => detail.user === user.id)
			};
		});
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
