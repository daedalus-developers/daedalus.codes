import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { db } from '@server';
import { Collections, type User } from '@types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) {
		return {};
	} else {
		const id: string = locals.user.id;

		const user = await db.collection(Collections.Users).getOne<User>(id);
		const avatar = db.files.getUrl(user, user.avatar);

		return {
			user,
			avatar
		};
	}
};
