// docs.json.js
export const get = async () => {

  // this gets all files from /docs/something.mdoc, and uses the file name as key, e.g. overview.mdoc becomes {overview: 'markdown'}
  // use this endpoint for notion, airtable, etc. to create the full documentation stack 

  const files = import.meta.glob('../docs/*.mdoc', {
    as: 'raw'
  })
  const posts = {}

  Object.keys(files).map(key => {
    // get the file name as the key
    let k = key.match(/[A-Za-z0-9_\-\.]+(?=\.[A-Za-z0-9]+$)/g)
    posts[k] = files[key]
  })

  return {
    body: posts
  }
}