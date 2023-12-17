import { db } from '@server';
import { Collections } from '@types';

export const queryEvent = (slug: string) =>
	db
		.collection(Collections.Events)
		.getFirstListItem(`title~"${slug.replaceAll('-', ' ')}"`)
		.then((data) => {
			data.preview = db.files.getUrl(data, data.preview);
			return data;
		});

export const queryEventByID = (id: string) =>
	db
		.collection(Collections.Events)
		.getOne(id)
		.then((data) => {
			data.preview = db.files.getUrl(data, data.preview);
			return data;
		});

export const queryEvents = (page: number = 1, perPage: number = 10) =>
	db
		.collection(Collections.Events)
		.getList(page, perPage, {
			sort: 'created'
		})
		.then((collection) => {
			const events = collection.items.map((event) => {
				event.preview = db.files.getUrl(event, event.preview);
				return event;
			});
			collection.items = events;
			return collection;
		});
