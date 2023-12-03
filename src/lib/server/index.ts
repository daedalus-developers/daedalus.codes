import { PUBLIC_PB_URL } from '$env/static/public';
import { PB_ADMIN_EMAIL, PB_ADMIN_PASSWORD } from '$env/static/private';
import PocketBase from 'pocketbase';

export const createClient = async () => {
	const pocketbase = new PocketBase(PUBLIC_PB_URL);
	await pocketbase.admins.authWithPassword(PB_ADMIN_EMAIL, PB_ADMIN_PASSWORD);
	return pocketbase;
};

export const db = await createClient();
