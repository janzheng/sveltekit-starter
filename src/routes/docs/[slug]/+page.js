import {toc} from '../toc'

export const load = async ({ fetch, params }) => {
  const slug = params.slug

  const docs = await fetch('/api/docs.json')
  const allDocs = await docs.json()

  let doc = allDocs[slug]

  return {
    posts: allDocs,
    toc,
    doc,
    slug
  }
}
