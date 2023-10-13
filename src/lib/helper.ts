import type { avatarLink } from './types';

export const avatarLinkBuilder = (params: avatarLink) =>
	`https://daedalus.fly.dev/api/files/${params.collectionName}/${params.id}/${params.fileName}`;

export const baseImageURL = (collectionId: string, id: string, image: string) => {
	return `https://daedalus.fly.dev/api/files/${collectionId}/${id}/${image}`;
}


export const convertDateTime = (dateStr: string) => {
	const date = new Date(dateStr);	
	const presentTime = date.toLocaleString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZoneName: 'short'
	});
	return presentTime;
}