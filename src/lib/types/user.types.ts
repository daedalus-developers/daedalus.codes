import { type infer as zInfer, boolean, date, object, string, enum as zEnum } from 'zod';
import { requiredString } from './util.types';

export const userRole = zEnum(['admin', 'team', 'user']);

export type UserRole = zInfer<typeof userRole>;

export const usernameSchema = requiredString('Username', { min: 3, max: 16 })
	.trim()
	.toLowerCase()
	.regex(/^[a-zA-Z0-9_]+$/);

export const userFormSchema = object({
	id: string(),
	username: usernameSchema,
	firstName: requiredString('First Name', {
		min: 3,
		max: 32
	}),
	lastName: requiredString('Last Name', { min: 3, max: 32 }),
	avatar: string(),
	email: string({
		required_error: 'Email address is required'
	}).email('Invalid email address'),
	verified: boolean(),
	role: userRole.default('user'),
	created: date(),
	updated: date()
});

export type UserForm = zInfer<typeof userFormSchema>;
