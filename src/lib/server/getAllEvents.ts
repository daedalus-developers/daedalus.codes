import { db } from '@server';
import { Collections, type Event } from '@types';

export const getAllEvents = async (
	pageNumber: number = 1,
	perPage: number = 20,
	queryString: string = ''
) => {
	let events = await db.collection(Collections.Events).getList(pageNumber, perPage, {
		filter: `title ~ "${queryString}" || type ~ "${queryString}"`,
		sort: '-created',
		search: queryString
	});

	let items = events.items.map((event) => {
		event.preview = db.files.getUrl(event, event.preview);
		return event;
	});

	events.items = items;

	return events;
};
