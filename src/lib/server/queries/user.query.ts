import { db } from '@server';
import { Collections, type User } from '@types';

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

export const queryUserWithDetails = (id: string) =>
	db.collection(Collections.UsersDetails).getOne<User>(id);
