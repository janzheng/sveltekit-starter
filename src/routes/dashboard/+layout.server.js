import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';
  
export const load = async ({ parent }) => {
  // try {
    let data = await parent()
  
    console.log('[dashboard/+layout.js] data', data)
  
    // force redirect to public page if not logged in
    if (!data?.user) {
      console.info('Redirect — User not logged in')
      throw redirect(302, env['PUBLIC_ROUTE_LOGGEDOUT'] || '/');
    }
    return {};
  // } catch (e) {
  //   console.error('[dashboard/+layout.js] error:', e)
  // }
}
