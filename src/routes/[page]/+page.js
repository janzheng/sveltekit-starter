import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
  try {
    const page = await import(`../${params.page}.svelte`)

    return {
      content: page.default,
      slug: params.page,
    }
  } catch (err) {
    console.error('[page] router error', err.message)
    throw error(404, err)
  }
}
