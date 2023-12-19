import { db } from '@server';
import { Collections, type UserRole, type UserWithDetails } from '@types';
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
				collection.filter((data) => data.expand?.user?.role === 'user');
				return collection;
			} else if (role === 'team') {
				collection.filter((data) => data.expand?.user?.role === 'team');
				return collection;
			}
			return collection;
		})
		.then((collection) => {
			collection.forEach((data) => {
				if (data.expand?.user?.avatar)
					data.expand.user.avatar = db.files.getUrl(data.expand.user, data.expand.user.avatar);
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
				data.expand.user.avatar = db.files.getUrl(data.expand.user, data.expand.user.avatar);
			return data;
		})
		.catch(() => undefined);
};

export const queryUserWithDetails = async (id: string): Promise<UserWithDetails | undefined> => {
	const query = await db
		.collection(Collections.UsersDetails)
		.getFirstListItem(db.filter('user = {:id}', { id }), {
			expand: 'user'
		});
	if (!query) return undefined;
	const userWithDetails: UserWithDetails = {
		id: query.expand?.user?.id as string,
		firstName: query.expand?.user?.firstName as string,
		lastName: query.expand?.user?.lastName as string,
		email: query.expand?.user?.email as string,
		username: query.expand?.user?.username as string,
		role: query.expand?.user?.role as UserRole,
		verified: query.expand?.user?.validated as boolean,
		avatar: db.files.getUrl(query.expand?.user, query.expand?.user?.avatar),
		details: query.details as string,
		bio: query.bio as string,
		x: query.x as string,
		linkedin: query.linkedin as string,
		github: query.github as string,
		created: query.created as string,
		updated: query.updated as string
	};
	return userWithDetails;
};
