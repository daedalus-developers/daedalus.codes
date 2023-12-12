import { array, boolean, object, string } from 'zod';
import type { infer as zInfer } from 'zod';

const projectSchema = object({
	id: string(),
	title: string(),
	category: string(),
	preview: string(),
	details: string(),
	published: boolean(),
	link: string().nullable(),
	created: string().datetime(),
	updated: string().datetime()
});

export const projectsSchema = array(projectSchema);

export type Project = zInfer<typeof projectSchema>;
