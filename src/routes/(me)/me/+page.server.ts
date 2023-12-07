import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '@server';
import { Collections, type User, userFormSchema } from '@types';
import { superValidate } from 'sveltekit-superforms/server';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.DB.authStore.isValid && !locals.user) throw redirect(302, '/login');

	if (!locals.user) throw redirect(302, '/login');
	const id: string = locals.user.id;

	const user = await db.collection(Collections.Users).getOne<User>(id);

	const form = await superValidate(user, userFormSchema);

	return {
		user,
		form
	};
};
