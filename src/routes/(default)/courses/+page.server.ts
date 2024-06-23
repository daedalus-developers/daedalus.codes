import type { PageServerLoad } from './$types';
import { courses } from './data';
export const load: PageServerLoad = async () => {
	return {
		courses
	};
};
