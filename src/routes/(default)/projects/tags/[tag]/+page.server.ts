import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { tag } = params;

	return {
		projects: ''
	};
};
