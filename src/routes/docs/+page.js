import {toc} from './toc'
export const load = async ({ fetch }) => {
  const docs = await fetch('/api/endpoints/notionmd?id=0e2dff283b074121b001da17a469963f')
  const json = await docs.json()

  let doc = json ? json.markdown : ``

  return {
    toc,
    doc,
  }
}
