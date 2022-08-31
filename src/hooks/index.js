
import { env } from '$env/dynamic/private';
// session-based account mgmt: https://rodneylab.com/sveltekit-session-cookies 

import cookie from 'cookie';
const ACCOUNT_COOKIE = env['ACCOUNT_COOKIE'];

// FOR REFERENCE ONLY
// export async function getSession({ locals }) {

//   const env = {
//     PUBLIC_PDR2_AUTH: process.env['PUBLIC_PDR2_AUTH'],
//     PUBLIC_DETA_KEY: process.env['PUBLIC_DETA_KEY'],
//     PUBLIC_PDR2_ENDPOINT: process.env['PUBLIC_PDR2_ENDPOINT']
//   }

//   const user = locals?.user;
//   if (user) {
//     return { env, user };
//   }
//   return { env };
// }




/* 

  event:
    getClientAddress: () => string;
    locals: App.Locals;
    params: Params;
    platform: Readonly<App.Platform>;
    request: Request;
    routeId: string | null;
    setHeaders: (headers: ResponseHeaders) => void;
    url: URL;
    
  */
export async function handle({ event, resolve }) {

  let response
  
  try {
    const { locals, url } = event;
    const { pathname } = url;
    const cookies = cookie.parse(event.request.headers.get('cookie') || '');

    locals.user = cookies[ACCOUNT_COOKIE] && JSON.parse(Buffer.from(cookies[ACCOUNT_COOKIE], 'base64').toString());

    // for running example /todos endpoint
    locals.userid = cookies['userid'] || crypto.randomUUID();



    // 
    // 
    // 
    // Resolve Event
    // 
    // 
    // 
    response = await resolve(event);

    // 
    // After Response Resolver
    // 

    console.log('[hooks] locals:', locals)

    // todos
    if (!cookies.userid) {
      // if this is the first time the user has visited this app,
      // set a cookie so that we recognise them when they return
      response?.headers?.set('set-cookie',
        cookie.serialize('userid', event.locals.userid, {
          path: '/',
          httpOnly: true
        })
      )
    }

    const isLoggingOut = pathname === '/api/account/logout';
    // const user = locals.user;


    // console.log('[Hooks] locals.user', locals.user, isLoggingOut)
    if (locals.user || isLoggingOut) {

      let userdata = Buffer.from(JSON.stringify(locals.user)).toString('base64') || ''
      response?.headers?.set('set-cookie',
        cookie.serialize(ACCOUNT_COOKIE, isLoggingOut ? '' : userdata, {
          path: '/',
          httpOnly: true,
          secure: true,
          maxAge: 3600 * 24 * 7, // hr > day > week
          sameSite: 'None',
          secure: true, // process.env.NODE_ENV === 'production';
        })
      )
    }
  } catch (e) {
    // might fail for emoji in profile
    console.error('Hooks error:', e)
  }




  return response;
}
