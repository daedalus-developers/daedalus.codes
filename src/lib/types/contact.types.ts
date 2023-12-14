import { object, string, type output } from 'zod';
import { requiredString } from './util.types';

export const contactSchema = object({
	id: string(),
	firstName: requiredString('First Name', { min: 3, max: 20 }),
	lastName: requiredString('Last Name', { min: 3, max: 20 }),
	email: requiredString('Email', { min: 3, max: 20 }).email(),
	phoneNumber: string().optional(),
	message: string().optional(),
	created: string().datetime(),
	updated: string().datetime()
});

export const subscriberSchema = object({
	id: string(),
	email: requiredString('Email', { min: 3, max: 20 }).email(),
	created: string().datetime(),
	updated: string().datetime()
});

export const contactFormSchema = contactSchema.omit({
	id: true,
	created: true,
	updated: true
});

export const subscriberFormSchema = subscriberSchema.omit({
	id: true,
	created: true,
	updated: true
});

export type Contact = output<typeof contactSchema>;
