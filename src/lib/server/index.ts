import { env as publicEnv } from '$env/dynamic/public';
import { env } from '$env/dynamic/private';
import PocketBase from 'pocketbase';
import { logger } from './logger';

export const createClient = async () => {
	const pocketbase = new PocketBase(publicEnv.PUBLIC_PB_URL);
	try {
		logger.info(`Pocketbase host: ${publicEnv.PUBLIC_PB_URL}\n`);
		await pocketbase.admins.authWithPassword(env.PB_ADMIN_EMAIL, env.PB_ADMIN_PASSWORD);
	} catch (e) {
		logger.error(e);
	}
	return pocketbase;
};

export const db = await createClient();
