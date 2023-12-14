import { object, string, type output, type infer as zInfer, enum as zEnum } from 'zod';
import { requiredString } from './util.types';

export const eventType = zEnum(['hackaton', 'webinar']);

export type EventType = zInfer<typeof eventType>;

export const eventStatus = zEnum(['open', 'ongoing', 'canceled', 'finished']);

export type EventStatus = zInfer<typeof eventType>;

export const eventSchema = object({
	id: string(),
	title: requiredString('Title', { min: 3 }).regex(/^[a-zA-Z0-9_]+$/),
	date: string().datetime(),
	preview: string(),
	details: string().optional(),
	created: string().datetime(),
	updated: string().datetime()
});

export type Event = output<typeof eventSchema>;
