import type { PageServerLoad } from './$types';
import { db } from '$lib/server';

export const load = (async () => {
	try {
		const records = await db.collection('projects').getFullList({
			sort: 'created'
		});
		return {
			records
		};
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}
}) satisfies PageServerLoad;
