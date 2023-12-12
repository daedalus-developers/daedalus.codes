import { db } from '@server';
import type { Project } from '@types';

export const getAllProjects = async () => {
	const projectList = (await db.collection('projects').getFullList({
		sort: 'created'
	})) as Project[];

	const projects = projectList.map((project) => {
		return {
			...project,
			preview: db.files.getUrl(project, project.preview)
		};
	});

	return projects;
};
