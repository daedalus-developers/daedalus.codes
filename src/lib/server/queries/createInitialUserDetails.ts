import { db } from '@server';
import { Collections, type UserDetails } from '@types';
export const createInitialUserDetails = async (user_id: string) => {
	try {
		await db.collection<UserDetails>(Collections.UsersDetails).create({
			user: user_id
		});
	} catch (error) {
		console.log(error);
	}
};
