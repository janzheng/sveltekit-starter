

import { userSignup } from '$plasmid/modules/pocket/'



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

    return {
      status: 200,
      body: userObject.user
    };
  } catch (error) {
    console.error('Sign up not completed:', error?.response?.data, error?.response?.data?.data?.email.message)
    // const message = `Error in endpoint /api/login: ${error?.data?.message}`;
    return {
      status: 500,
      body: error?.response?.data?.data?.email // email taken
      // || error?.response?.data
    };
  }
}
