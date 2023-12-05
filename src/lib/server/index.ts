import { env } from '$env/dynamic/public';
import { env as runtimeEnv } from '$env/dynamic/private';
import PocketBase from 'pocketbase';

export const createClient = async () => {
	const pocketbase = new PocketBase(env.PUBLIC_PB_URL ?? '');
	await pocketbase.admins.authWithPassword(
		runtimeEnv.PB_ADMIN_EMAIL ?? '',
		runtimeEnv.PB_ADMIN_PASSWORD ?? ''
	);
	return pocketbase;
};

export const db = await createClient();
