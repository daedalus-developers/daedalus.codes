import { db } from '@server';
import type { PageServerLoad } from './$types';
import { Collections, type Event } from '@types';

export const load: PageServerLoad = () => {
	return {
		events: db
			.collection(Collections.Events)
			.getList()
			.then((collection) =>
				collection.items.map((data) => {
					data.preview = db.files.getUrl(data, data.preview);
					return data;
				})
			)
	};
};
