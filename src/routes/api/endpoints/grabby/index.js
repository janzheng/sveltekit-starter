
/* 

  ENDPOINT / SERVER-SIDE

  gets stuff from Grabby'd whimsy data (already local); if that doesn't work, use the API

  https://kit.svelte.dev/docs/routing#endpoints

*/

import data from '$lib/data/grabbydata.json'


// export const get = getSiteContent // return json from content
export async function get({url}) {
  let id = url.searchParams.get('id')
  if (data && id && data[id] ) {
    return { body: data[id] }
  }
  // return { body: {} }
  return { status: 400 }
}
// endpoints need {props: ...} for svelte page props to read; and {body: ...} as json data


