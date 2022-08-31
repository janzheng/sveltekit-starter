
// use this enpoint to serve a file from deta
// this DOES work with Airtable
// example: /uploads/filename.jpg

import { json } from '@sveltejs/kit'
import { getFile } from '$plasmid/utils/deta/get-file'

export const GET = async (obj)=> {
  try {
    let res = await getFile(obj)
    console.log('res:', res)
    return new Response(res.body, {
      status: res.status,
      headers: res.headers,
    })
  } catch (e) {
    console.error('deta/uploads/slug', e)
  }
}
