import { db } from '@server';
import type { PaginatedTeam, UserDetails } from '@types';

export const fetchTeam = async (pageNumber: number, perPage: number) => {
	const usersWithTeamRole = (await db.collection('users').getList(pageNumber, perPage, {
		sort: 'created',
		filter: 'role="team"'
	})) as PaginatedTeam;

	const userDetails = (await db.collection('users_details').getFullList({
		sort: 'created'
	})) as UserDetails[];

	return {
		...usersWithTeamRole,
		items: usersWithTeamRole.items!.map((user) => {
			return {
				...user,
				avatar: db.files.getUrl(user, user.avatar),
				userDetails: userDetails.find((detail) => detail.user === user.id)
			};
		})
	};
};
