import { env as publicEnv } from '$env/dynamic/public';
import { env } from '$env/dynamic/private';
import PocketBase from 'pocketbase';

export const createClient = async () => {
	const pocketbase = new PocketBase(publicEnv.PUBLIC_PB_URL);
	try {
		await pocketbase.admins.authWithPassword(env.PB_ADMIN_EMAIL!, env.PB_ADMIN_PASSWORD!);
	} catch (e) {
		console.log(e);
	}
	return pocketbase;
};

export const db = await createClient();

export { fetchTeam } from './getAllTeam';
export { getAllProjects } from './getAllProjects';
