// @ts-nocheck
import { db } from '$lib/db';
// export async function GET({ url, fetch }) {
//   const response = await db.collection('events_view_detailed').getFullList();
//   console.log(response);
//   return new Response(JSON.stringify(response));
// }

export async function GET({ url }) {
  try {
    const page = url.searchParams.get('page') ?? 1;
    const keyword = url.searchParams.get('q') ?? '';

    const limit = 10;
    const response = await db.collection('events_view_detailed').getList(1, limit, {
      page: page,
      filter: `created > "2022-01-01 00:00:00" && title ~ "%${keyword}%"`,
    });
    console.log(keyword);
    return new Response(JSON.stringify(response));

  } catch (error) {
    console.log({
      status: 500,
      error : error,
      message:'Unexpected error occur while request is being processed'
    })
    return new Response({
      status: 500,
      error : error,
      message:'Unexpected error occur while request is being processed'
    })
  }
}