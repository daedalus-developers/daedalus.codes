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

/**
* This will make it easier to see fields inside the type provided.
* @Example
* ```ts
* type Dog = {
 name: string;
 age: number;
};
type Breed = "Labrador" | "Corgi" | "Poodle";
* const dog: Dog & { breed: Breed } = {
*   ...
* }
* ```
* 
* when you hover on dog, you would see 
* ```ts
* const dog: Dog & {
    breed: Breed;
}
```
* 
* but when you use `Flatten<Dog & { breed: Breed }>` you would see
* 
* ```ts
* const dog: {
    name: string;
    age: number;
    breed: Breed;
}
```
*/
export type Flatten<T> = {
	[K in keyof T]: T[K];
} & {};
