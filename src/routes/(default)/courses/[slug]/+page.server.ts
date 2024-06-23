import type { PageServerLoad } from './$types';
import { courses } from './../data';
export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const course = courses.find((course) => course.slug === slug);
	return {
		course
	};
};
