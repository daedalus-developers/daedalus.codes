import { db } from '@server';
import { Collections } from '@types';

export type Team = {
	avatar: string;
	firstName: string;
	lastName: string;
	linkedin: string;
	x: string;
	github: string;
	username: string;
	bio: string;
};

export const teamQuery = db
	.collection(Collections.UsersDetails)
	.getList(1, 3, {
		requestKey: 'team',
		expand: 'user'
	})
	.then((collection) => collection.items)
	.then((collection) => collection.filter((data) => data?.expand?.user?.role === 'team'))
	.then((collection) =>
		collection.map((data) => {
			const member: Team = {
				avatar: db.files.getUrl(data.expand?.user, data.expand?.user?.avatar, {
					thumb: '100x250'
				}),
				username: data.expand?.user?.username,
				firstName: data.expand?.user?.firstName,
				lastName: data.expand?.user?.lastName,
				bio: data.bio,
				linkedin: data.linkedin,
				github: data.github,
				x: data.x
			};
			return member;
		})
	)
	.catch(() => {
		const team: Team[] = [];
		return team;
	});
