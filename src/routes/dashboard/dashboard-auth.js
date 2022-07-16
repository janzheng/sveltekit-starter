


export async function post({ locals, request }) {

  try {
    const { message } = await request.json();
    const user = locals.user

    console.log('Example POST endpoint:', message, user)

    if (!user) {
      console.log('No user; unauthorized')
      return {
        status: 403,
        body: "Not logged in"
      }
    }

    return {
      status: 200,
      body: {
        message: "secret server response"
      }
    };
  } catch (error) {
    console.error('Login not completed', error)
    // const message = `Error in endpoint /api/login: ${error?.data?.message}`;
    return {
      status: 500,
      body: error
    };
  }
}
