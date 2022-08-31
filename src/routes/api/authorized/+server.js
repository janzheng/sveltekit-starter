
/* 

  Example functions as authorized API calls from front-end

*/

import { json, redirect, error } from '@sveltejs/kit';

export async function POST({ locals, request }) {
  try {
    const { message } = await request.json();
    const user = locals.user

    locals.banana = true

    console.log('Example POST endpoint:', message, user)

    if (!user) {
      console.log('No user; unauthorized')
      throw error(403, 'Unauthorized')
    }

    return json("secret authorized server response")
  } catch (error) {
    console.error('Login not completed', error)
    // const message = `Error in endpoint /api/login: ${error?.data?.message}`;
    throw error(500, error)
  }
}
