
<script context="module">
  export const load = async ({ params, fetch }) => {
    const slug = params.slug
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    const matchingPosts = posts
      .filter(post => post.meta.slug == slug)

    return {
      props: {
        slug,
        post: matchingPosts.length > 0 ? matchingPosts[0] : {}
      }
    }
  }
</script>


<script>

  export let post, slug
  $: console.log(post, slug)

</script>


<div class="_content">
  {@html post.body.html }
</div>
