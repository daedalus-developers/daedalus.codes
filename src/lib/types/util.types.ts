import { string } from 'zod';

export const requiredString = (
	name: string,
	constraint?: {
		min?: number;
		max?: number;
	}
) => {
	if (constraint?.min && constraint?.max) {
		return string({
			required_error: `${name} is required.`
		})
			.min(constraint.min, `${name} must contain atleast ${constraint.min} characters.`)
			.max(constraint.max, `${name} must contain atleast ${constraint.max} characters.`);
	} else if (constraint?.min) {
		return string({
			required_error: `${name} is required.`
		}).min(constraint.min, `${name} must contain atleast ${constraint.min} characters.`);
	} else if (constraint?.max) {
		return string({
			required_error: `${name} is required.`
		}).max(constraint.max, `${name} must contain atleast ${constraint.max} characters.`);
	} else {
		return string({ required_error: `${name} is required.` });
	}
};
