

import { addRecord } from '$plasmid/utils/airfetch.js'


// takes a {url, tableName, fieldName} object and attempts to insert that into an airtable location
export const post = async ({ request, url }) => {
  const data = await request.json()

  const record = await addRecord(
    data.tableName,
    // localhost:1234/deta/airtable/filename
    { [data.fieldName]: [{ url: data.url }], },
    null,
    { insertOptions: ['typecast'], },
  )


  return {
    body: record,
  };

};

