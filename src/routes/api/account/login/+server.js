

import { userLoginEndpoint } from '$plasmid/modules/pocket/'


import { json, error } from '@sveltejs/kit'
export async function POST({ locals, request }) {
  try {
    const { email, password } = await request.json();
    const userObject = await userLoginEndpoint(email, password);
    // console.log('user object:::', userObject)
    locals.user = userObject.user;
    return json(userObject.user);
  } catch (e) {
    console.log('[account/login/+serverjs] Login not completed', e?.response?.data)
    throw error(500,
      JSON.stringify({
        status: e?.response?.status,
        data: e?.response?.data,
        statusText: e?.response?.statusText,
      })
    )
  }
}
