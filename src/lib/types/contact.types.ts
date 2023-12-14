import { object, string, type input } from 'zod';

export const contactSchema = object({
	firstName: string({
		required_error: 'First Name is required'
	}).min(2),
	lastName: string({
		required_error: 'Last Name is required'
	}).min(2),
	email: string({
		required_error: 'Email is required'
	}).email(),
	phoneNumber: string({
		required_error: 'Phone Number is required'
	}).min(10),
	message: string({
		required_error: 'Message is required'
	}).min(10)
});

export type ContactType = input<typeof contactSchema>;
