import { array, boolean, object, string } from 'zod';
import type { infer as zInfer } from 'zod';

const projectSchema = object({
	id: string(),
	title: string(),
	category: string(),
	preview: string().nullable(),
	details: string(),
	published: boolean(),
	link: string().nullable(),
	collectionId: string(),
	collectionName: string(),
	created: string(),
	updated: string()
});

export const projectsSchema = array(projectSchema);

export type Project = zInfer<typeof projectSchema>;

export type ProjectRecords = {
	records: Project[];
};
