
// use this enpoint to serve a file from deta
// this DOES work with Airtable
// example: /uploads/filename.jpg

import { getFile } from '$plasmid/utils/deta/get-file'

export const GET = getFile
