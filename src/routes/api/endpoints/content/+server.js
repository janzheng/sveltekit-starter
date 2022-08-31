
import { json } from '@sveltejs/kit';
import { getSiteContent, flattenTable } from '$plasmid/utils/airfetch'

/* 

  ENDPOINT / SERVER-SIDE

  gets content from the Content table
  https://kit.svelte.dev/docs/routing#endpoints

*/


// export const GET = getSiteContent // return json from content
export const GET = async () => {
  let content = await getSiteContent()
  return json(flattenTable(content.body.Content))
}
