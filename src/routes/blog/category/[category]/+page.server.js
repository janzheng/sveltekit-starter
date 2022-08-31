import { fetchPosts }  from '$lib/utils/fetchPosts'

export const load = async ({ params, url }) => {
  try {
    const category = params.category
    const options = { category }
    const posts = await fetchPosts(options)
  
    // console.log('category ::', category)
    return { 
      posts,
      category,
      total: posts?.length,
    }

  } catch(e) {
    console.log('category error:', e)
  }
}
