import type { avatarLink } from './types';

export const avatarLinkBuilder = (params: avatarLink) =>
	`https://daedalus.fly.dev/api/files/${params.collectionName}/${params.id}/${params.fileName}`;
