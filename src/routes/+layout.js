import { error } from '@sveltejs/kit'

export const load = async ({ url, data }) => {
  try {
    /**
     * This fetch call is not used in this file, but the route won't be pre-rendered 
     * and routed properly unless it's called inside a `load` function. ¯\_(ツ)_/¯
     * */
    // const rss = await fetch(`${url.origin}/api/rss.xml`)

    // const parentdata = await parent();
    console.log('[+layout.js] layout.server data', data)

    return {
      path: url.pathname,
      user: data?.user,
    }
  }
  catch (err) {
    throw error(500, err)
  }
}
