// posts.json.js
export const GET = async () => {
  const allPostFiles = import.meta.glob('../blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { attributes, html } = await resolver()
      const postPath = path.slice(2, -3)

      return {
        meta: attributes,
        path: postPath,
        content: html,
      }
    })
  )

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })


  return {
    body: sortedPosts
  }
}