

import { env } from '$env/dynamic/public';

export async function GET({ locals }) {
  try {
    console.info('Logging out:', locals.user)
    locals.user = null;
  
    return new Response(undefined, {
      status: 302,
      headers: {
        Location: env['PUBLIC_ROUTE_LOGGEDOUT'] || '/',
      }
    });

  } catch (e) {
    conosle.error(`Error in route /api/account/logout: ${e}`);
  }
}
