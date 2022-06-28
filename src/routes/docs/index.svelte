<!-- src/routes/blog/index.svelte -->
<script context="module">
import {toc} from './toc'
export const load = async ({ fetch }) => {
  const docs = await fetch('/api/endpoints/notionmd?id=0e2dff283b074121b001da17a469963f')
  const json = await docs.json()

  console.log('???', json, docs)
  let doc = json ? json.markdown : ``

  return {
    props: {
      toc,
      doc,
    }
  }
}
</script>



<script>
  import DocShell from '$lib/components/docs/DocShell.svelte'

  export let doc
</script>

<DocShell {toc} {doc} />
