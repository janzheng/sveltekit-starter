<!-- src/routes/blog/index.svelte -->
<script context="module">
export const load = async ({ fetch, params }) => {
  const slug = params.slug

  const docs = await fetch('/api/docs.json')
  const allDocs = await docs.json()

  // content pages for toc
  let toc = [
    {
      title: 'Get started',
      links: [
        { href: '/docs/overview', title: 'What is Markdoc?' },
        { href: '/docs/getting-started', title: 'Installation' },
        { href: '/docs/faq', title: 'FAQ'},
        { href: '/sandbox', title: 'Try it out' }
      ]
    },
    {
      title: 'Core concepts',
      links: [
        { href: '/docs/syntax', title: 'Syntax and schema' },
        { href: '/docs/nodes', title: 'Nodes' },
        { href: '/docs/tags', title: 'Tags' },
        { href: '/docs/attributes', title: 'Attributes' },
        { href: '/docs/variables', title: 'Variables' },
        { href: '/docs/functions', title: 'Functions' },
        { href: '/docs/render', title: 'Rendering' },
        { href: '/docs/validation', title: 'Validation' }
      ]
    },
    {
      title: 'Integration guides',
      links: [
        { href: '/docs/examples', title: 'Common examples' },
        { href: '/docs/examples/html', title: 'Using with HTML' },
        { href: '/docs/nextjs', title: 'Using with Next.js' },
        { href: '/docs/examples/react', title: 'Using with React' }
      ]
    },
    {
      title: 'Advanced concepts',
      links: [
        { href: '/docs/frontmatter', title: 'Frontmatter' },
        { href: '/docs/partials', title: 'Partials' }
      ]
    },
  ]

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

  export let posts, toc, doc, slug
</script>

{#if doc}

  <DocShell {toc} {doc} />

{:else}
  <h2>No doc found</h2>
{/if}