import { db } from '@server';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ url  }) => {
	const q = url.searchParams.get('q') || '';
  const filterSearchType  = url.searchParams.get('filter') || 'all';
  const limit: any = url.searchParams.get('limit') || 10;

  async function fetchUsers() {

    return await db.collection('users').getList(1, 
      filterSearchType === 'all' ? 10 : limit
      , {
      filter: `username ~ "${q}"`,
      expand: `user_details`,
      sort: '-created',
      search: q
    })
  }

  async function fetchEvents() {

    return await db.collection('events').getList(1, 
      filterSearchType === 'all' ? 10 : limit
      , {
      filter: `title ~ "${q}" || type ~ "${q}"`,
      sort: '-created',
      search: q
    })
  }


  async function fetchData() {

    const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(2000);

    // if (!q || q.trim() === '') {
    //   return {
    //     users: null,
    //     events: null
    //   };
    // }

    const [userData, eventData] = await Promise.all([
      filterSearchType !== 'events' ? fetchUsers() : null,
      filterSearchType !== 'users' ? fetchEvents() : null
    ]);
  
    return {
      users: userData,
      events: eventData
    };
  }

  return {
		post: 'Some data',
		streamed: {
      searchData: fetchData()
    }
	};
}