import { PUBLIC_PB_URL } from '$env/static/public';
import PocketBase from 'pocketbase';

export function createClient() {
	return new PocketBase(PUBLIC_PB_URL);
}

export const db = createClient();