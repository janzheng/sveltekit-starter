
/* 

  ENDPOINT / SERVER-SIDE

  gets stuff from Grabby'd whimsy data (already local); if that doesn't work, use the API

  https://kit.svelte.dev/docs/routing#endpoints

*/

import data from '$lib/data/grabbydata.json'
import grabby from '$lib/data/grabby.json'

import { getGrabbyMulti } from '$plasmid/utils/grabby'
export const GET = getGrabbyMulti(data, grabby)



// export const GET = getSiteContent // return json from content
// export async function GET({url}) {
//   let id = url.searchParams.get('id')
//   if (data && id && data[id] ) {
//     return { body: data[id] }
//   }
//   // return { body: {} }
//   return { status: 400 }
// }
// endpoints need {props: ...} for svelte page props to read; and {body: ...} as json data


