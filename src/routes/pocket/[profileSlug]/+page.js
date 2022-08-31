export const load = async ({ params, fetch }) => {
  const slug = params.profileSlug
  // const response = await fetch('/api/posts.json')
  // const posts = await response.json()

  // const matchingPosts = posts
  //   .filter(post => post.meta.slug == slug)

  return {
    slug,
    // post: matchingPosts.length > 0 ? matchingPosts[0] : {}
  }
}
