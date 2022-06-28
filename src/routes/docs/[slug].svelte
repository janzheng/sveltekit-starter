<!-- src/routes/blog/index.svelte -->
<script context="module">
import {toc} from './toc'
export const load = async ({ fetch, params }) => {
  const slug = params.slug

  const docs = await fetch('/api/docs.json')
  const allDocs = await docs.json()


  let doc = allDocs[slug]

  return {
    props: {
      posts: allDocs,
      toc,
      doc,
      slug
    }
  }
}
</script>






<script>
  import DocShell from '$lib/components/docs/DocShell.svelte'

  export let posts, doc, slug
</script>

{#if doc}

  <DocShell {toc} {doc} />

{:else}
  <h2>No doc found</h2>
{/if}