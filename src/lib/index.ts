// place files you want to import through the `$lib` alias in this folder.
import { PUBLIC_PB_URL } from '$env/static/public';
import PocketBase from 'pocketbase';

export function createClient() {
	return new PocketBase(PUBLIC_PB_URL);
}

export const db = createClient();
