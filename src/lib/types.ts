export type TeamMember = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	title: string[];
	description: string;
	avatar: string;
	twitter?: string;
	linkedin?: string;
	github?: string;
	tiktok?: string;
	kofi?: string;
	facebook?: string;
	patreon?: string;
};

export type avatarLink = {
	collectionName: string;
	id: string;
	fileName: string;
};
