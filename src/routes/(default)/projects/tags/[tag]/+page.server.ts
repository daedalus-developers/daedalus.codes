import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { tag } = params;
	console.log(tag);
	return {
		projects: ''
	};
};
