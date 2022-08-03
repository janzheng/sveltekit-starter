

import { userLoginEndpoint } from '$plasmid/modules/pocket/'



export async function POST({ locals, request }) {
  const { email, password } = await request.json();

  try {
    const userObject = await userLoginEndpoint(email, password);

    locals.user = userObject.user;

    return {
      status: 200,
      body: userObject.user
    };
  } catch (error) {
    console.error('Login not completed', error?.response?.data?.message)
    // const message = `Error in endpoint /api/login: ${error?.data?.message}`;
    return {
      status: 500,
      body: error?.response?.data
    };
  }
}
