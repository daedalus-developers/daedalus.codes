import type { PageServerLoad } from './$types';
import { queryProject } from '@server/queries';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	return {
		project: await queryProject(slug)
	};
};
