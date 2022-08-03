// // need to be uncommented for svelte demo

// import cookie from 'cookie';

// export const handle = async ({ event, resolve }) => {

//   const cookies = cookie.parse(event.request.headers.get('cookie') || '');
//   event.locals.userid = cookies['userid'] || uuid();

//   let response = await resolve(event);

// 	if (!cookies.userid) {
// 		// if this is the first time the user has visited this app,
// 		// set a cookie so that we recognise them when they return
//     response.headers.set('set-cookie',
//       cookie.serialize('userid', event.locals.userid, {
//         path: '/',
//         httpOnly: true
//       })
//     )
// 	}

// 	return response;
// };



// session-based account mgmt: https://rodneylab.com/sveltekit-session-cookies 

import { v4 as uuid } from '@lukeed/uuid';
import cookie from 'cookie';
const COOKIE_NAME = process.env['ACCOUNT_COOKIE'];

// this data is public; sent to `import { session } from '$app/stores';
export async function getSession({ locals }) {

  const env = {
    PDR2_AUTH: process.env['PDR2_AUTH'],
    DETA_KEY: process.env['DETA_KEY'],
    PDR2_ENDPOINT: process.env['PDR2_ENDPOINT']
  }

  const user = locals?.user;
  if (user) {
    return { env, user };
  }
  return { env };
}






export async function handle({ event, resolve }) {

  let response
  
  try {
    const { locals, request, url } = event;
    let headers = request?.headers;
    const { pathname } = url;
    const loggingOut = pathname === '/api/account/logout';

    const cookies = cookie.parse(headers?.get('cookie') || '');

    // before endpoint call
    locals.user = cookies[COOKIE_NAME] && JSON.parse(Buffer.from(cookies[COOKIE_NAME], 'base64').toString());


    // 
    // 
    // for running example /todos endpoint
    locals.userid = cookies['userid'] || uuid();
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
    // 
    // 
    // 



    // endpoint call
    response = await resolve(event);



    // after endpoint call
    const user = loggingOut ? '' : locals.user;


    const secure = true; // process.env.NODE_ENV === 'production';
    const maxAge = 3600 * 24 * 7; // hr > day > week
    const sameSite = 'None'; 
    // change to "None" if you want cross-site login but secure must be true; change to "Strict" if you want same-site
    let cookieHeader

    if (user)
      cookieHeader = `${COOKIE_NAME}=${Buffer.from(JSON.stringify(user)).toString('base64') || ''}; Max-Age=${maxAge}; Path=/; ${secure ? 'Secure;' : ''
      } HttpOnly; SameSite=${sameSite}`;

    if (user || loggingOut) {
      response?.headers?.set('Set-Cookie', cookieHeader);
    }
  } catch (e) {
    // might fail for emoji in profile
  }




  return response;
}
