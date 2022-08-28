
<script context="module">
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    const matchingPosts = posts
      .filter(post => post.meta.categories.includes(currentCategory))

    return {
      props: {
        category: params.category,
        posts: matchingPosts
      }
    }
  }
</script>


<script>

  export let posts, category
  $: console.log(posts, category)

</script>


<div class="_content">
  <h2>{category}</h2>
  {#each posts as post}
     {@html post.body.html }
  {/each}

</div>
