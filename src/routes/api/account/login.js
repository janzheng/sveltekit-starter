

import { userLoginEndpoint } from '$plasmid/modules/pocket/'

function login(email, password) {
  // add logic to authenticate user with external service here
  console.log('login.js', { email, password: !!password });
  const userLogin = 'sveltekit-starter-user';

  return userLogin;
}



export async function post({ locals, request }) {
  const { email, password } = await request.json();

  console.log('logging in with', email, password)
  try {
    const userObject = await userLoginEndpoint(email, password);

    locals.user = userObject.user;
    console.log('setting locals:', locals.user)

    return {
      status: 200
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
