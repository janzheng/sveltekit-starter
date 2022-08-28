export async function GET({ locals }) {
  console.info('Logging out:', locals.user)
  locals.user = null;

  return {
    status: 302,
    headers: {
      Location: '/'
    }
  };
}
