import { env } from '$env/dynamic/public';

export const assetLink = (collection: string, owner: string, fileName: string) =>
	`${env.PUBLIC_PB_URL}/api/files/${collection}/${owner}/${fileName}`;
