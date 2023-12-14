import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '@server';
import { Collections } from '@types';
import type { ClientResponseError } from 'pocketbase';

export const POST: RequestHandler = async ({ request, locals }) => {
	const formData = await request.formData();
	const file = formData.get('file');

	if (file instanceof File && locals.user) {
		try {
			const upload = await db.collection(Collections.Media).create({
				file
			});
			return json({ url: db.files.getUrl(upload, upload.file) });
		} catch (e) {
			const err = e as ClientResponseError;
			error(400, { message: err.message });
		}
	}
	error(400, { message: 'No file provided' });
};
