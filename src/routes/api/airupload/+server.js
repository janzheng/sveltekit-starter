
import { json } from '@sveltejs/kit';
import { postToAirtable } from '$plasmid/utils/airfetch.js'

// takes a {url, tableName, fieldName} object and attempts to insert that into an airtable location
export const POST = async(obj) => {
  let { body } = await postToAirtable(obj)
  return json(body.record)
} 