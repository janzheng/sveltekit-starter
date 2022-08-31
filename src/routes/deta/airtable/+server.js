

import { json } from '@sveltejs/kit'
import { detaToAirtableFilePoster } from "$plasmid/utils/uploads/detaToAirtable"

// this gets the file from /deta/uploads/filename/ endpoint and adds it to Airtable
// move from Deta to Airtable
export const POST = async (obj) => {
  let {body} = await detaToAirtableFilePoster(obj)
  console.log('deta/airtable: body', body)
  return json(body)
}