import { fetchPosts }  from '$lib/utils/fetchPosts'
import { json, error } from '@sveltejs/kit'

export const GET = async ({ params }) => {
	const { category } = params
	const options = { category, limit: -1 }

	try {
		const posts = await fetchPosts(options)	
    return json(posts?.length)
	}
	catch(err) {
		throw error(500, `Could not retrieve ${category} posts. ${err}`)
	}
}