import type { avatarLink } from './types';

const BASE = `https://db.daedalus.codes/api/files/dlpl7xsko1becsg/2htusk2i8vyh0hb/dpUcxJNU4SDa_Ek36Je09My.jpg`;

export const avatarLinkBuilder = (params: avatarLink) =>
	`https://daedalus.fly.dev/api/files/${params.collectionName}/${params.id}/${params.fileName}`;
