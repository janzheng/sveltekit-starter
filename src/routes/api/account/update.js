

// this is required to update server-side (and cookies) of login / user
import { updateProfile } from '$plasmid/modules/pocket/'



export async function POST({ locals, request }) {
  const {user, profile} = await request.json();

  try {
    const newProfile = await updateProfile(user, profile);

    locals.user.profile = newProfile;

    // console.log('user:', locals.user)

    return {
      status: 200,
      body: locals.user
    };
  } catch (error) {
    console.error('Update not completed', error?.response?.data?.message)
    // const message = `Error in endpoint /api/login: ${error?.data?.message}`;
    return {
      status: 500,
      body: error?.response?.data
    };
  }
}
