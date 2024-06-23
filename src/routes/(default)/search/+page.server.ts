import { db } from '@server';
import type { PageServerLoad } from '../$types';
import type { ListResult } from 'pocketbase';
import { Collections, type DaedalusEvent, type User } from '@types';

export const load: PageServerLoad = async ({ url }) => {
	const q = url.searchParams.get('q') || '';
	const filterSearchType = url.searchParams.get('filter') || 'all';
	const isAll = filterSearchType === 'all';
	const limit = Number(url.searchParams.get('limit')) || 10;

	async function fetchUsers() {
		return await db.collection<User>(Collections.Users).getList(1, limit, {
			filter: `username ~ "${q}" || email ~ "${q}" || firstName ~ "${q}" || lastName ~ "${q}"`,
			expand: `user_details`, //TODO: This is NOT working...
			sort: '-created',
			search: q
		});
	}

	async function fetchEvents() {
		return await db.collection<DaedalusEvent>(Collections.Events).getList(1, limit, {
			filter: `title ~ "${q}" || type ~ "${q}"`,
			sort: '-created',
			search: q
		});
	}

	async function fetchData() {
		const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
		await delay(2000);

		const [userData, eventData] = await Promise.all([
			isAll || filterSearchType === 'users' ? fetchUsers() : null,
			isAll || filterSearchType === 'events' ? fetchEvents() : null
		]);
		return {
			users: userData,
			events: eventData
		};
	}

	return {
		post: 'Some data',
		searchData: fetchData()
	};
};
