import { db } from '@server';
import { Collections, type DaedalusEvent } from '@types';

export const queryEvent = (slug: string) =>
	db
		.collection<DaedalusEvent>(Collections.Events)
		.getFirstListItem(`title~"${slug.replaceAll('-', ' ')}"`, {
			requestKey: 'event'
		})
		.then((data) => {
			data.preview = db.files.getUrl(data, data.preview);
			return data;
		});

export const queryEventByID = (id: string) =>
	db
		.collection<DaedalusEvent>(Collections.Events)
		.getOne(id)
		.then((data) => {
			data.preview = db.files.getUrl(data, data.preview);
			return data;
		});

export type eventFilter = {
	query?: string;
	sort?: string;
};

export const queryEvents = (
	page: number = 1,
	perPage: number = 10,
	filter: eventFilter = {
		query: '',
		sort: 'created'
	}
) =>
	db
		.collection<DaedalusEvent>(Collections.Events)
		.getList(page, perPage, {
			sort: '-date',
			requestKey: 'events',
			filter: db.filter(
				'(title ?~ {:title} || description ?~ {:description} || details ?~ {:details})',
				{ title: filter.query, description: filter.query, details: filter.query }
			)
		})
		.then((collection) => {
			const events = collection.items.map((event) => {
				event.preview = db.files.getUrl(event, event.preview);
				return event;
			});
			collection.items = events;
			return collection;
		});
