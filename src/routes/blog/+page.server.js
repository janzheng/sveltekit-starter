


export const load = async ({ url }) => {

  try {
    const postRes = await fetch(`${url.origin}/api/posts.json`)
    const totalRes = await fetch(`${url.origin}/api/posts/count.json`)
    const posts = await postRes.json()
    const total = await totalRes.json()
  
    // return { posts: [] }
    return { posts, total }
  } catch(e) {
    console.error('blog server', e)
  }
}
``