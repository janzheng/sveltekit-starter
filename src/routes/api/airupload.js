

import { postToAirtable } from '$plasmid/utils/airfetch.js'


// takes a {url, tableName, fieldName} object and attempts to insert that into an airtable location
export const post = postToAirtable