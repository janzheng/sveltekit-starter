

import { userSignup } from '$plasmid/modules/pocket/'



import { json, error } from '@sveltejs/kit'

export async function POST({ locals, request }) {
  const { email, password, profile } = await request.json();

  try {
    const userObject = await userSignup({
      email,
      password,
      passwordConfirm: password,
      profile,
    })

    locals.user = userObject;

    return json(userObject.user)
  } catch (error) {
    console.error('Sign up not completed:', error?.response?.data, error?.response?.data?.data?.email.message)

    throw error(500, error?.response?.data?.data)
    // const message = `Error in endpoint /api/login: ${error?.data?.message}`;
    // throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
    // // Suggestion (check for correctness before using):
    // // return new Response(error?.response?.data?.data?.email, { status: 500 });
    // return {
    //   status: 500,
    //   body: error?.response?.data?.data?.email // email taken
    //   // || error?.response?.data
    // };
  }
}
