<!-- src/routes/blog/index.svelte -->
<script context="module">
export const load = async ({ fetch }) => {
  const docs = await fetch('/api/endpoints/notionmd?id=7bfd7ca39fce47cea724b7beb09ab33f')
  const json = await docs.json()

  // content pages for toc
  let toc = []

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

  export let doc, toc, docs
</script>

<DocShell {toc} {doc} />
