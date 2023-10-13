// @ts-nocheck
import { db } from '$lib/db';
export async function GET({ url }) {

  const id = url.searchParams.get('id');
  const response = await db.collection('events_view_detailed').getOne(id, {expand: '',});
    
  console.log(response);
  return new Response(JSON.stringify(response));
}