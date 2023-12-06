import { object, string, union, type input } from 'zod';
import { requiredString } from './util.types';
import { usernameSchema, userSchema } from './user.types';

const emailOrUserName = union([string().email().trim(), usernameSchema]);

export const loginSchema = object({
	key: emailOrUserName,
	password: requiredString('Password')
});

export const registerSchema = userSchema
	.omit({
		id: true,
		avatar: true,
		verified: true,
		role: true,
		created: true,
		updated: true
	})
	.extend({
		password: requiredString('Password', {
			min: 8,
			max: 72
		}),
		passwordConfirm: requiredString('Password Confirm', {
			min: 8,
			max: 72
		})
	})
	.refine((data) => data.password === data.passwordConfirm, {
		path: ['passwordConfirm'],
		message: 'Passwords do not match.'
	});

export type AuthLogin = input<typeof loginSchema>;

export type AuthRegister = input<typeof registerSchema>;
