

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
    const user = login(email, password);
    locals.user = user;

    console.log('setting locals:', locals.user)
    return {
      status: 200
    };
  } catch (error) {
    const message = `Error in endpoint /api/login: ${error}`;
    return {
      status: 500,
      body: message
    };
  }
}
