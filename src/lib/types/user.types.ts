import {
	ZodIssueCode,
	type infer as zInfer,
	boolean,
	object,
	string,
	enum as zEnum,
	custom
} from 'zod';
import { requiredString } from './util.types';

export const userRole = zEnum(['admin', 'team', 'user']);

export type UserRole = zInfer<typeof userRole>;

export const usernameSchema = requiredString('Username', { min: 3, max: 16 })
	.trim()
	.toLowerCase()
	.regex(/^[a-zA-Z0-9_]+$/);

export const linkSchema = string().optional();

export const userSchema = object({
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
	created: string().datetime(),
	updated: string().datetime()
});

export const userFormSchema = userSchema
	.omit({
		created: true,
		updated: true
	})
	.extend({
		id: userSchema.shape.id.optional(),
		role: userSchema.shape.role.optional(),
		verified: userSchema.shape.verified.optional(),
		avatar: userSchema.shape.avatar.optional()
	});

export const userDetails = object({
	id: string(),
	created: string().datetime(),
	updated: string().datetime(),
	user: string(),
	bio: string().optional(),
	details: string().optional(),
	linkedin: string().optional(),
	x: string().optional(),
	github: string().optional()
});

export const userDetailsFormSchema = userDetails
	.omit({
		created: true,
		updated: true
	})
	.extend({
		id: userDetails.shape.id.optional(),
		user: userDetails.shape.user.optional()
	});

export type User = zInfer<typeof userSchema>;

export type UserDetails = zInfer<typeof userDetails>;

export const avatarSchema = object({
	id: string(),
	avatar: custom<FileList>().superRefine((files, ctx) => {
		if (files.length === 0) {
			ctx.addIssue({
				code: ZodIssueCode.custom,
				message: 'File must be provided'
			});
			return false;
		}

		if (
			!['image/webp', 'image/png', 'image/svg', 'image/jpg', 'image/jpeg'].includes(files[0].type)
		) {
			ctx.addIssue({
				code: ZodIssueCode.custom,
				message: 'File must be a valid image type'
			});
			return false;
		}

		if (files[0].size > 1024 * 1024 * 5) {
			ctx.addIssue({
				code: ZodIssueCode.custom,
				message: 'File must be less than 5MB'
			});
			return false;
		}

		return true;
	})
});

export type Avatar = zInfer<typeof avatarSchema>;

export type Team = User & Partial<{ userDetails: UserDetails }>;
