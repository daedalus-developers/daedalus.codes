export type TeamMember = {
	id: string;
	firstName: string;
	lastName: string;
	title: string[];
	description: string;
	avatar: string;
	twitter?: string;
	linkedin?: string;
	github?: string;
};

export type avatarLink = {
	collectionName: string;
	id: string;
	fileName: string;
};
