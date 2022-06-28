
import { getSiteContent, flattenTable } from '$plasmid/utils/airfetch'

/* 

  ENDPOINT / SERVER-SIDE

  gets content from the Content table
  https://kit.svelte.dev/docs/routing#endpoints

*/


// export const get = getSiteContent // return json from content
export async function get({ params }) {
  let content
  content = await getSiteContent()
  // console.log(content)
  return { body: { Content: flattenTable(content.body.Content) } }
  // return { body: {"hello":"world" } }
  // return {props: await getSiteContent()}
}
// endpoints need {props: ...} for svelte page props to read; and {body: ...} as json data


