


// export const get = getSiteContent // return json from content
export async function get({ url }) {
  let secret = url.searchParams.get('secret')
  console.log('secret:', secret, import.meta.env.VITE_DEPLOY)
  // if (secret == import.meta.env.VITE_DEPLOY_SECRET) {
    return { 
      status: 302, 
      headers: { Location: import.meta.env.VITE_DEPLOY } 
    }
  // }
  // return { status: 400 }
}


