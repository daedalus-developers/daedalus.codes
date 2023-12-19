import { db } from '@server';
import { Collections } from '@types';
import type { RecordModel } from 'pocketbase';

export const queryUser = (userId: string) =>
	db
		.collection(Collections.Users)
		.getOne(userId)
		.then((data) => {
			data.avatar = db.files.getUrl(data, data.avatar);
			return data;
		})
		.catch(() => {
			return undefined;
		});

export const queryUsersByRole = (role: string = '') =>
	db
		.collection(Collections.UsersDetails)
		.getFullList({
			expand: 'user'
		})
		.then((collection) => {
			if (role === '') {
				return collection;
			} else if (role === 'user') {
				return collection.filter((data) => data.expand?.user?.role === 'user');
			} else if (role === 'team') {
				return collection.filter((data) => data.expand?.user?.role === 'team');
			}
			return collection;

		})
		.then((collection) => {
			collection.forEach((data) => {
				if (data.expand?.user?.avatar)
					data.expand.user.avatar = db.files.getUrl(data.expand.user, data.expand.user.avatar, {
						thumb: '300x350'
					});
				return data;
			});
			return collection;
		});

export const queryUserByUsername = async (username: string): Promise<RecordModel | undefined> => {
	const query = await db
		.collection(Collections.Users)
		.getFirstListItem(db.filter('username = {:username}', { username }))
		.catch(() => undefined);
	if (!query) return undefined;
	return db
		.collection(Collections.UsersDetails)
		.getFirstListItem(db.filter('user= {:id}', { id: query.id }), {
			expand: 'user'
		})
		.then((data) => {
			if (data.expand?.user?.avatar)
				data.expand.user.avatar = db.files.getUrl(data.expand.user, data.expand.user.avatar, {
					thumb: '300x350'
				});
			return data;
		})
		.catch(() => undefined);
};
