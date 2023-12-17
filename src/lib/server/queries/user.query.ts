import { db } from '@server';
import { Collections, type Team, type User } from '@types';

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

export const queryTeam = (page: number = 1, perPage: number = 3) =>
	db
		.collection(Collections.UsersDetails)
		.getList(page, perPage, {
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

export const queryProjects = (page: number = 1, perPage: number = 3) =>
	db
		.collection(Collections.Projects)
		.getList(page, perPage, {
			sort: 'created'
		})
		.then((collection) => {
			const projects = collection.items.map((project) => {
				project.preview = db.files.getUrl(project, project.preview);
				return project;
			});
			collection.items = projects;
			return collection;
		});
