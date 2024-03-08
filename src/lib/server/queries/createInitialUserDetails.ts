import { db } from '@server';
export const createInitialUserDetails = async (user_id: string) => {
  try {
    await db.collection('users_details').create({
        user: user_id,
      })
    } catch (error) {
      console.log(error);
    }
}