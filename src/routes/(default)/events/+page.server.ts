import type { PageServerLoad } from './$types';
import { queryEvents } from '@server/queries';

export const load: PageServerLoad = ({ url }) => {
	const query = url.searchParams.get('q') ?? '';
	const page = Number(url.searchParams.get('page')) + 1 || 1;
	const perPage = Number(url.searchParams.get('perPage')) || 6;

	return {
		events: queryEvents(page, perPage, {
			query
		})
	};
};
