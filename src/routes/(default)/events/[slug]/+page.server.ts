import { db } from '@server';
import type { PageServerLoad } from './$types';
import { Collections } from '@types';

export const load: PageServerLoad = ({ params }) => {
	const { slug } = params;

	return {
		event: db
			.collection(Collections.Events)
			.getFirstListItem(`title="${slug.replaceAll('-', ' ')}"`)
			.then((data) => {
				data.preview = db.files.getUrl(data, data.preview);
				return data;
			})
	};
};
