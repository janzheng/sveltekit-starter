
/* 

  [SvKit Endpoint]

  ORM-based Deta
  Doesn't work client-side; offline mode uses LowDB

  Examples of https://github.com/BetaHuhn/deta-base-orm 

*/

import { json } from '@sveltejs/kit'
import { _get } from '$plasmid/utils/deta/kittens.js';



// Expose the deta key on purpose
export const GET = async ()=>{
  let body
  body = await _get()
  return json(body)
}


