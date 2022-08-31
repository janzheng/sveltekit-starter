import { error } from '@sveltejs/kit'

export const load = async ({locals}) => {
  try {
    console.log('[+layout.server.js] event locals', locals?.user)

    return {
      user: locals?.user
    }
  }
  catch (err) {
    throw error(500, err)
  }
}
