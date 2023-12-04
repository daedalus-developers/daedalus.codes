import { object, string } from 'zod';

export const loginSchema = object({
	key: string({
		required_error: 'Username or email is required'
	}),
	password: string({
		required_error: 'Password is required'
	})
});

export const registerSchema = object({
	username: string({
		required_error: 'Username is required'
	}),
	email: string({
		required_error: 'Email is required'
	}),
	firstName: string({
		required_error: 'First name is required'
	}),
	lastName: string({
		required_error: 'Last name is required'
	})
});
