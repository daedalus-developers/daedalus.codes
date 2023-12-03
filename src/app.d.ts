// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import PocketBase, { type AuthModel } from 'pocketbase';
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			DB: PocketBase;
			user: AuthModel | undefined;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
