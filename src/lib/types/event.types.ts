import { object, string, type output, enum as zEnum } from 'zod';
import { requiredString } from './util.types';
import type { ListResult } from 'pocketbase';

export const daedalusEventType = ['hackaton', 'webinar'] as const;

export type DaedalusEventType = typeof daedalusEventType;

export const daedalusEventStatus = ['open', 'ongoing', 'canceled', 'finished'] as const;

export type DaedalusEventStatus = typeof daedalusEventType;

export const daedalusEventSchema = object({
	id: string(),
	title: requiredString('Title', { min: 3 }).regex(/^[a-zA-Z0-9_]+$/),
	date: string().datetime(),
	preview: string(),
	details: string().optional(),
	created: string().datetime(),
	updated: string().datetime(),
	status: zEnum(daedalusEventStatus),
	type: zEnum(daedalusEventType)
});

export type DaedalusEvent = output<typeof daedalusEventSchema>;
export type DaedalusEvents = Array<DaedalusEvent>;
