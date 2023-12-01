export const getFirstElementOrUndefined = <T>(collection: T[]): T | undefined => {
	return collection.length > 0 ? collection[0] : undefined;
};

export const range = (start: number, stop: number, step = 1): Iterable<number> => {
	return [...Array(stop - start).keys()]
		.filter((i) => !(i % Math.round(step)))
		.map((v) => start + v);
};

export const randNumber = (max: number = 1): number => Math.floor(Math.random() * max);

export const isEmptyObject = (obj: unknown) =>
	typeof obj === 'object' && obj !== null ? Object.keys(obj).length === 0 : true;

export const empty = (value: unknown) => value === undefined || value === null || value === '';

export const existingFieldObjectBuilder = <T>(data: T) => {
	const newObject: Record<string, unknown> = {};
	for (const key in data) {
		if (data[key]) {
			newObject[key] = data[key];
		}
	}
	return newObject;
};
