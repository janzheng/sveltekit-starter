import { postsPerPage } from '$lib/config'





export const fetchPosts = async ({ offset, limit = postsPerPage, category = '' } = {}) => {

  // const posts = []
  const posts = await Promise.all(
    Object.entries(import.meta.glob('$lib/posts/*.md')).map(async ([path, resolver]) => {
      try {
        const { metadata } = await resolver()
        const slug = path.split('/').pop().slice(0, -3)
        // console.log('boop', {...metadata, slug})
        return { ...metadata, slug }
      } catch (e) {
        console.log('fetchPosts error:', e)
      }
    })
  )



  let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  if (category) {
    sortedPosts = sortedPosts.filter(post => post.categories.includes(category))
  }

  if (offset) {
    sortedPosts = sortedPosts?.slice(offset)
  }

  if (limit && limit < sortedPosts?.length && limit != -1) {
    sortedPosts = sortedPosts.slice(0, limit)
  }

  sortedPosts = sortedPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    coverWidth: post.coverWidth,
    coverHeight: post.coverHeight,
    date: post.date,
    categories: post.categories,
  }))

  return sortedPosts
}
