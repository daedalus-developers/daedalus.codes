import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = ({ locals }) => {
	locals.DB.authStore.clear();
	throw redirect(303, '/');
};
