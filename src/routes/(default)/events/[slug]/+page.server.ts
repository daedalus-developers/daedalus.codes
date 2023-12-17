import type { PageServerLoad } from './$types';
import { queryEvent } from '@server/queries';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	return {
		event: await queryEvent(slug)
	};
};
