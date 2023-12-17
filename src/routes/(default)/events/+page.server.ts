import { db } from '@server';
import type { PageServerLoad } from './$types';
import { Collections } from '@types';
import { queryEvents } from '@server/queries';

export const load: PageServerLoad = () => {
	return {
		events: queryEvents()
	};
};
