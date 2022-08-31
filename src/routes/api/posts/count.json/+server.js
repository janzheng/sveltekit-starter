
import { json, error } from '@sveltejs/kit';
import { fetchPosts } from '$lib/utils/fetchPosts'

export const GET = async () => {
	try {
    const posts = await fetchPosts()

    return json(posts?.length)
	} catch(err) {
    console.log('Post count error:', err)
		throw error(500, `Could not retrieve total posts. ${err}`)
	}
}