import { db } from '@server';
import { Collections, type UserDetails, type User, type ExpandedUserDetails } from '@types';
import type { ListResult } from 'pocketbase';

export const queryUser = (userId: string) =>
	db
		.collection<User>(Collections.Users)
		.getOne(userId)
		.then((data) => {
			data.avatar = db.files.getUrl(data, data.avatar);
			return data;
		})
		.catch(() => {
			return undefined;
		});
//FIXME: I am not sure how the expand works, can someone verify how it should be typed thanks!
export const queryUsersByRole = (page: number = 1, perPage: number = 10, role: string = '') =>
	db
		.collection<UserDetails>(Collections.UsersDetails)
		.getList(page, perPage, {
			sort: '-created',
			expand: 'user'
		})
		.then((rawCollection) => {
			const collection = rawCollection as unknown as ListResult<ExpandedUserDetails>;
			if (role === '') {
				return collection;
			} else if (role === 'user') {
				collection.items = collection.items.filter((data) => data.expand?.user?.role === 'user');
				return collection;
			} else if (role === 'team') {
				collection.items = collection.items.filter((data) => data.expand?.user?.role === 'team');
				return collection;
			} else {
				return collection;
			}
		})
		.then((collection) => {
			collection.items = collection.items.map((data) => {
				if (data.expand?.user?.avatar)
					data.expand.user.avatar = db.files.getUrl(data.expand.user, data.expand.user.avatar, {
						thumb: '300x350'
					});
				return data;
			});
			return collection;
		});

export const queryUserByUsername = async (
	username: string
): Promise<ExpandedUserDetails | undefined> => {
	const query = await db
		.collection<User>(Collections.Users)
		.getFirstListItem(db.filter('username = {:username}', { username }))
		.catch(() => undefined);
	if (!query) return undefined;
	return db
		.collection<UserDetails>(Collections.UsersDetails)
		.getFirstListItem(db.filter('user= {:id}', { id: query.id }), {
			expand: 'user'
		})
		.then((rawData) => {
			const data = rawData as unknown as ExpandedUserDetails;
			if (data.expand?.user?.avatar)
				data.expand.user.avatar = db.files.getUrl(data.expand.user, data.expand.user.avatar, {
					thumb: '300x350'
				});
			return data;
		})
		.catch(() => undefined);
};
