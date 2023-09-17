import { avatarLinkBuilder } from '$lib/helper';
import type { TeamMember } from '$lib/types';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ fetch }) => {
	const teamMembers: TeamMember[] = [];
	const request = await fetch('https://daedalus.fly.dev/api/collections/teamView/records/');
	const response = await request.json();
	const { items } = response;
	const collectionId = items[0].collectionId;
	for (const item in items) {
		const member: TeamMember = {
			id: items[item].id as string,
			firstName: items[item].firstName as string,
			lastName: items[item].lastName as string,
			title: items[item].title as string[],
			avatar: items[item].avatar as string,
			description: items[item].description as string,
			github: items[item].github as string,
			twitter: items[item].twitter ?? ''
		};

		member.avatar = avatarLinkBuilder({
			collectionName: collectionId,
			id: member.id,
			fileName: member.avatar
		});
		teamMembers.push(member);
	}
	return { teamMembers };
};
